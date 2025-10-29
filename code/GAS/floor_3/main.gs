const JSON_FILE_ID = '1HNHi6P8FyfkpD861RViJ6_vQn4JxEdws';


function doGet(e) {
  const t = HtmlService.createTemplateFromFile('index');
  // ← JSON文字列をそのまま埋め込む（エスケープしない）
  t.MARKERS_DATA = DriveApp.getFileById(JSON_FILE_ID).getBlob().getDataAsString('utf-8');
  return t.evaluate()
    .setTitle('Floor Map')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}