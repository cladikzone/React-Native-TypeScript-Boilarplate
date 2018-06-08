# React Native TypeScript Boilarplate
This can be used to create typescript based react native application.

### Prerequisites
Assume that, you have already install [NodeJs](https://nodejs.org/en/) in your computer. Once you installed the NodeJs, you need to install yarn globally in your computer because this boilarplat has used yarn. To do that use this command.

```
npm i -g yarn
```
If you have web content to deploy in a React Native web view, Please add your content to following folder. ( make sure your index.html in this folder )
```
YOUR_BOILARPLATE_ROOT_DIR/webcontents
```
this folder and it's content will be moved to this location
```
YOUR_BOILARPLATE_ROOT_DIR/android/app/src/main/assets/web
```
#### Important !!!
You need to start android emulator or connect android device to your computer before you run the setup command. Because this setup automatically start the development environment and try to install app-debug.apk to your emulator or device. If it failed, you have to manually run the build command again.

### Setup your first react native project
When you setup your first project you need to give a name for it. And please make sure your in the root folder of "TypeScriptBoilarPlate" from your command line. Then run this command to create your first project.

```
npm run setup --appName=YourProjectName
```

This will create your first project by installing required node modules.

##### If you use WebView in your application,

In order to load your web content inside the React Native web view, You need to setup your web view as bellow,

```
<WebView
    ...
    source={{uri: 'file:///android_asset/index.html'}}
    ...
/>
```
##### Setup Emulator to debug the application ( Live Reload )
Once you open your application from android emulator, Press ``` Ctrl + M ``` To open the configuration window. Follow the steps to configure the live reload and debugin on the device.

* Click on ``` Enable Live Reload ``` Menu.
* Click on ``` Dev Settings ```
* In the opned window, Click on ```Debug server host & port for device ``` Menu.
* Add your computer's IP address and React Native Metro bundler port ``` Ex :- 192.103.01.12:8081```
* Click OK and close the application.
* Run ``` yarn start ``` in your terminal.
* Open another terminal window and run ```yarn android```

Happy cording... ;)