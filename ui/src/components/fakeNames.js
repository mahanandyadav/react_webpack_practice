// import faker from 'faker'
// const faker=require('faker')
import { faker } from '@faker-js/faker';

const  fakeNames = Array.from(Array(10000), () => {
  return faker.internet.userName();
});
export default fakeNames