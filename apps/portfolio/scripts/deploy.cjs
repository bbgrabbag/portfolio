const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { promises: fs, createReadStream } = require('fs');
const mime = require('mime-types');
const path = require('path');


const s3 = new S3Client({
    region: 'us-east-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const getBuildFiles = async (filepath) => {
    try {
        const files = await fs.readdir(filepath, { recursive: true, withFileTypes: true });
        return files.filter(file => !file.isDirectory())
    } catch (err) {
        console.log('Error: deploy.cjs getBuildFiles() failed')
        console.log(err)
    }
}

const deploy = async (bucket) => {
    process.chdir(path.resolve(__dirname, '..', 'dist'))
    const files = await getBuildFiles('./');
    await Promise.all(files.map(async file => {
        const filepath = file.parentPath === './' ? file.name : file.parentPath + '/' + file.name
        const config = {
            Bucket: bucket,
            Key: filepath,
            Body: createReadStream(filepath),
            ContentType: mime.lookup(filepath),
            Expires: new Date(),
        }
        return s3.send(new PutObjectCommand(config))
    }))
    return files
}

try {
    console.log(`\nDeploying to ${process.env.S3_BUCKET_NAME}...\n`)
    deploy(process.env.S3_BUCKET_NAME).then((files) => {
        console.log(`\nDeployment to ${process.env.S3_BUCKET_NAME} successful.\n`)
        console.log('Files deployed:')
        files.forEach(file => console.log('- ', path.resolve(file.parentPath, file.name)))
    });
} catch (err) {
    console.log('Error: deploy.cjs deploy() failed')
    console.log(err)
}

