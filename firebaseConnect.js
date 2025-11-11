const admin = require("firebase-admin");
const serviceAccount = require("./openmurugesan-firebase-adminsdk-fbsvc-5b6481a9b7.json");
admin.initializeApp(
	{
		credential: admin.credential.cert(serviceAccount),
		databaseURL: "https://openmurugesan-default-rtdb.asia-southeast1.firebasedatabase.app"
	}
);
const db = admin.database();
const ref = db.ref("/");
ref.once("value", (snapshot) =>
	{
		const data = snapshot.val();
		console.log("Data from Firebase Realtime Database:", data);
		const nov2025Data = data.spendingData["Nov-2025"];
		if( ( nov2025Data ) && ( 0 < nov2025Data.length ) )
		{
			console.log("First array in Nov-2025:", nov2025Data[0]);
		}
		else
		{
			console.log("No data found for Nov-2025");
		}
	},
	(errorObject) =>
	{
		console.log("Error reading database: " + errorObject.code);
	}
);
