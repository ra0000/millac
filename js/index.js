const flkty = new Flickity(".main-carousel", {
    wrapAround: true,
    autoPlay: 1500,
    pauseAutoPlayOnHover: false,
    prevNextButtons: false,
    pageDots: false,
    lazyLoad: 1,
    setGallerySize: false,
});

const uap = new UAParser();
let ua = uap.getResult();

const call = (phone) => {
    if (ua.device.type !== "mobile") {
        alert("휴대폰에서만 바로 전화통화가 가능합니다\n전화번호: " + phone);
        return;
    }
    location.href = "tel:" + phone;
};

const sms = (phone) => {
    if (ua.device.type !== "mobile") {
        alert("휴대폰에서만 바로 문자전송이 가능합니다\n전화번호: " + phone);
        return;
    }
    location.href = "sms:" + phone;
};
