import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoValue, userValue]) => {
    // another approach
    //   const photo = Object.values(photoValue)[1];
    //   const user = Object.values(userValue).join(' ');
    //   console.log(photo, user)
      console.log(`${photoValue.body} ${userValue.firstName} ${userValue.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
