var fs = require('fs');
var path = require('path');
var androidAssetsDir = __dirname + '/android/app/src/main/assets';
var appName = process.env.npm_config_appName;

let _files = ['package.json', 'app.json', 'index.js'];

var isAssets = process.argv[2];
if (isAssets) {
    if (!fs.existsSync(androidAssetsDir)) {
        fs.mkdir(androidAssetsDir, 0777, error => {
            if (error) {
                console.log('Error : ', error);
                return process.exit(1);
            }
            console.log('Android assets folder created');
        });
    };
    return;
}

if (!appName) {
    console.log("Usage: npm run setup --appName=something");
    return process.exit(-1);
}

if (appName.split(' ').length > 1) {
    console.log("Usage: appName can not include spacess");
    return process.exit(-1);
}

console.log('Your app name will be : ' + appName);

var changeAppName = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.exit(-1);
        }

        if (data) {
            var result = data.replace(/YOURAPPNAME/g, appName);
            result = result.replace(/APP_DISPLAY_NAME/g, appName);
            fs.writeFile(filePath, result, 'utf8', (err) => {
                if (err) {
                    console.log(err);
                    process.exit(-1);
                }
                console.log('File ' + filePath + ' successfully updated.');
            });
        }
    });
};

_files.forEach((item, key) => {
    if (!item.startsWith('.'))
        changeAppName('./' + item);
});