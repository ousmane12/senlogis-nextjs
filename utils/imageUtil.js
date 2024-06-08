const dataURItoBlob = (property, index) => {
    const dataURI = `data:${property.images[index].type};base64,${property.images[index].picByte}`;
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else
      byteString = unescape(dataURI.split(',')[1]);
  
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const byteArrays = [];
  
    for (let offset = 0; offset < byteString.length; offset += 512) {
      const slice = byteString.slice(offset, offset + 512);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: mimeString });
  };

export {dataURItoBlob};