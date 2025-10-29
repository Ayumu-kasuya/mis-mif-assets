const JSON_FILE_ID = '1ztxsxzmBVBH6HBwxmqhJXkY1qDORsR41';

function doGet(e) {
  var route = (e && e.parameter && e.parameter.route) ? e.parameter.route : 'map';
  
  if (route === 'markers') {
    var txt = DriveApp.getFileById(JSON_FILE_ID).getBlob().getDataAsString('utf-8');
    return ContentService.createTextOutput(txt).setMimeType(ContentService.MimeType.JSON);
  }
  
  // JSONデータを読み込む
  var jsonText = DriveApp.getFileById(JSON_FILE_ID).getBlob().getDataAsString('utf-8');
  
  var t = HtmlService.createTemplateFromFile('index');
  t.MARKERS_DATA = jsonText;
  
  var html = t.evaluate();
  html.setTitle('Floor Map');
  html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return html;
}