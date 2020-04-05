import { IContentData } from './shared-models';

export const contentData: {
    [key: string]: IContentData;
} = {
    cleanliness: {
        heading: 'Cleanliness In Muslim Society',
        text:
            'Throwing garbage and spitting on roads. Dirty Masjid Toilet. Clean house but dirty society.',
        videosList: [
            {
                url: 'https://youtube.com/embed/lue4Em1AKfY',
                urduText: 'بچے کچرے کو سڑک پر نہ پھینکنا سکھاتے ہیں',
                hindiText: 'सड़क पर कचरा नहीं फेंकना सिखा रहे बच्चे',
                englishText: 'Kids teaching not to throw garbage on road',
            },
            {
                url: 'https://youtube.com/embed/LLWxZymPBYo',
                urduText:
                    'اگر آپ جانتے ہیں کہ قیامت کل آنے والی ہے تو آج ہی ایک درخت لگایں بنائیں',
                hindiText:
                    'अगर आप जानते हैं कि कल क़यामत आ रही है, तो आज एक पेड़ लगाएं',
                englishText:
                    'if you know that Qiyamat is coming tomorrow, plan a tree today',
            },
            {
                url: 'https://youtube.com/embed/aLaLbNm3W34',
                urduText: 'سڑک پر تھوکنے کی ایک مزاحیہ ویڈیو',
                hindiText: 'सड़क पर थूकने का एक मज़ेदार वीडियो',
                englishText: 'a funny video of spitting on road',
            },
            {
                url: 'https://youtube.com/embed/iNRavFdKC8U',
                urduText: 'کیا گندے مسلم معاشروں کے لئے کارپوریشن ذمہ دار ہے؟',
                hindiText:
                    'क्या गंदे मुस्लिम मोहल्लों के लिए कारपोरेशन जिम्मेदार है?',
                englishText:
                    'is corporation responsible for dirty Muslim societies?',
            },
            {
                url: 'https://youtube.com/embed/XT9aDTC1aFY',
                urduText: 'ویڈیو دیکھنا جاری رکھیں اور کل نقصان گنیں',
                hindiText: 'वीडियो को देखते रहें और कुल नुकसान को गिनें',
                englishText:
                    'keep on watching the video and count the total loss',
            },
            {
                url: 'https://youtube.com/embed/fsdGsUOKWu4',
                urduText: 'سڑک پر کچرا جمع ہونا کس طرح شروع ہوتا ہے؟',
                hindiText: 'सड़क पर कचरा कैसे जमा होना शुरू होता है?',
                englishText: 'how garbage starts collects on road?',
            },
            {
                url: 'https://youtube.com/embed/2fs0IUQlzbw',
                urduText: 'مسجد کی صفائی کرنے والے کچھ نوجوان - پونہ مہاراشٹر',
                hindiText: 'मस्जिद की सफाई करते कुछ नौजवान - पूना महाराष्ट्र',
                englishText:
                    'few young people cleaning Masjid - Pune Maharashtra',
            },
            {
                url: 'https://youtube.com/embed/Huj1s7fRBB4',
                urduText:
                    'غیر ملکی تبلیغی جماعت اور ہندوستانی گندے وضو خانہ اور ٹوائلٹ',
                hindiText:
                    'बहार मुल्क की तब्लीगी जमात और भारतीय गंदे वुज़ू खान और टॉयलेट',
                englishText:
                    'Foreign tablighi jamat and indian dirty wuzu khana and toilet',
            },
            {
                url: 'https://youtube.com/embed/CRtVOE3zolw',
                urduText: 'یورپ اور ہمارے معاشرے میں صفائی',
                hindiText: 'यूरोप और हमारे समाज में स्वच्छता',
                englishText: 'cleanliness in Europe and in our society',
            },
            {
                url: 'https://youtube.com/embed/u3-uzMk90G8',
                urduText: 'گھر اور کپڑا صاف لیکن معاشرے گندا',
                hindiText: 'घर और कपड़ा साफ लेकिन समाज गंदा',
                englishText: 'House and cloth clean but society dirty',
            },
        ],
    },
};

// Copy following code in grid to create dataObject
// grid = document.getElementById('grid');
// list = grid.children;
// ytlist = Array.from(list).map(div => div.lastElementChild());
// textList = ytlist.map(item => {
//     url = item.getElementsByTagName('iframe')[0].src;
//     urduText = item.getElementsByTagName('p')[0].innerText;
// hindiText = item.getElementsByTagName('p')[1].innerText;
// englishText = item.getElementsByTagName('p')[2].innerText;
//     return {url, urduText, hindiText,englishText};
// })
// copy(textList);
