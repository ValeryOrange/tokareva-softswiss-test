import { homePageData } from './data';

export default function fakeRequestHomePageData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(homePageData);
        }, 2000);
    });
}
