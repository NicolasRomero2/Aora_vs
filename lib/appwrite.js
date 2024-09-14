import { Account, Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'co.edu.sena',
    projectId: '66c507bc002cf42ea9ef',
    databaseId: '66c5141300050f30a7bc', 
    userCollectionId: '66c5147500290325fc51',
    videoCollectionId: '66c5153f002ac9769aab',
    storageId: '66ca239f00035f32e735'
}

const client = new Client();

client
	.setEndpoint(config.endpoint)
	.setProject(config.projectId)
	.setPlatform(config.platform)


export const account = new Account(client);

const createUser = () => {
//Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
	.then(function (response) {
		console.log(response);
	}, function (error) {
		console.log(error);
	});
}
