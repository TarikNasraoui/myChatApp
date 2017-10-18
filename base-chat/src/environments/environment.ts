// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
		apiKey: "AIzaSyDFffdmZs0JuDgyhTWOvJ-AxKJi3Eb5hrQ",
		authDomain: "myfirstbase-8c767.firebaseapp.com",
		databaseURL: "https://myfirstbase-8c767.firebaseio.com",
		projectId: "myfirstbase-8c767",
		storageBucket: "myfirstbase-8c767.appspot.com",
		messagingSenderId: "930106293366"
  }
};
