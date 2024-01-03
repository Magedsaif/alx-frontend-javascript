import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoValue, userValue]) => {
    //   const photo = Object.values(photoValue)[1];
    //   const user = Object.values(userValue).join(' ');
      console.log(`${photoValue.body} ${userValue.firstName} ${userValue.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
