const sharp = require("sharp");
const fs = require('fs');
const path = require('path');
const { Readable } = require("stream");

async function streamToBuffer(readableStream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    readableStream.on('data', data => {
      if (typeof data === 'string') {
        console.log('11111111111111111')
        // Convert string to Buffer assuming UTF-8 encoding
        chunks.push(Buffer.from(data, 'utf-8'));
      } else if (data instanceof Buffer) {
        console.log('2222222222222222222')
        chunks.push(data);
      } else {
        console.log('333333333333')
        // Convert other data types to JSON and then to a Buffer
        const jsonData = JSON.stringify(data);
        chunks.push(Buffer.from(jsonData, 'utf-8'));
      }
    });
    readableStream.on('end', () => {
      resolve(Buffer.concat(chunks));
    });
    readableStream.on('error', reject);
  });
}

async function getMetadata() {
  try {
    const imageFile = path.resolve(process.cwd(), 'src', 'nextjs.svg');
    const targetFile = path.resolve(process.cwd(), 'src', 'nextjs.png');
    const metadata = await sharp(imageFile).metadata();
    console.log(metadata);

    const result = await sharp(imageFile)
      .resize({
        width: metadata.width > 600 ? 600 : metadata.width
      })
      .png({ quality: 10 })
      .toFile(targetFile);
    console.log(result);

  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

async function getMetadata2() {
  try {
    const imageFile = path.resolve(process.cwd(), 'src', 'express-rest-jest-simple-01.png');
    const targetFile = path.resolve(process.cwd(), 'src', 'express-rest-jest-simple-02.png');

    const imageStream = fs.createReadStream(imageFile);
    const buffer = await streamToBuffer(imageStream);
    const metadata = await sharp(buffer).metadata();

    const result = await sharp(buffer)
      .resize({
        width: metadata.width > 600 ? 600 : metadata.width
      })
      .png({ quality: 10 })
      .toBuffer((err, data, info) => {
        // data here directly contains the buffer object.
        const fileStream = Readable.from(data);
        console.log(info);

      });


  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

getMetadata();