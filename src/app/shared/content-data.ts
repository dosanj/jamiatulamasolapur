import { IContentData, ISideMenuItem } from './shared-models';
import { sideMenuDetails } from '../pages/home-page/navigation-page-data';

export let contentData: {
    [key: string]: IContentData;
} = null;

function expand(item: ISideMenuItem) {
    if ((!item.children || item.children.length === 0) && item.name) {
        const link = createUrl(item);
        contentData[link] = item.content;
        return;
    }
    item.children.forEach((i) => {
        expand(i);
    });
    return null;
}
export function expandList() {
    sideMenuDetails.forEach((item) => {
        expand(item);
    });
}
export function createUrl(item: ISideMenuItem) {
    if (item.url) {
        return item.url;
    }
    if (item && item.name && !item.children) {
        return '/' + item.name.toLowerCase().replace(/ /g, '-');
    }
    return null;
}
export function getContentData() {
    if (contentData) {
        return contentData;
    } else {
        contentData = {};
        expandList();
        return contentData;
    }
}
// Copy following code in grid to create dataObject
/*
caption = document.getElementsByClassName('caption')[0];
heading = caption.children[0].innerText;
text = caption.children[1].firstElementChild.innerText;
grid = document.getElementById('grid');
list = grid.children;
ytlist = Array.from(list).map(div => div.lastElementChild);
videosList = ytlist.map(item => {
    url = item.getElementsByTagName('iframe')[0].src;
    urduText = item.getElementsByTagName('p')[0].innerText;
hindiText = item.getElementsByTagName('p')[1].innerText;
englishText = item.getElementsByTagName('p')[2].innerText;
    return {url, urduText, hindiText,englishText};
});
data = {heading, text,videosList }
copy(data); */
