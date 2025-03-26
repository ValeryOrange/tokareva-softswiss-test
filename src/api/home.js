import { homePageData } from './data';

export default function fakeRequestHomePageData({ signal }) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            if (signal.aborted) {
                reject(new Error('Request aborted'));
            } else {
                resolve(homePageData);
            }
        }, 2000);

        // Abort the request if the signal is aborted
        signal.addEventListener('abort', () => {
            clearTimeout(timer);
            // Clear the timeout if aborted
            reject(new Error('Request aborted'));
        });
    });
}
