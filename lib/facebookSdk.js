module.exports.initFbSdk = (Vue, facebookClientId) => {
    window.fbAsyncInit = () => {
      FB.init({
        appId: facebookClientId,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2',
      });
      Vue.FB = FB;
    };
    
};