import FileSave from 'file-saver'

export default function writeFile(objectToSave){
     var file = new File([JSON.stringify(objectToSave)], "website-config.json", {type: "text/plain;charset=utf-8"});
     FileSave.saveAs(file);
}