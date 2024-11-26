 
    // 배너와 스타일 추가 함수
    function addBannerWithStyles() {
      // 이미 스타일이 추가되었는지 확인
      if (!document.getElementById('dynamicBannerStyles')) {
        const style = document.createElement('style');
        style.id = 'dynamicBannerStyles';
        style.textContent = `
          /* 배너 위젯 스타일 */
          .banner-widget {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #f5f5f5;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px 20px;
            margin: 20px auto;
            max-width: 800px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            font-size: 16px;
            color: #333;
          }

          .banner-widget .banner-text {
            flex: 1;
            margin-right: 15px;
          }

          .banner-widget .cta-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            font-size: 14px;
            cursor: pointer;
            text-decoration: none;
          }

          .banner-widget .cta-button:hover {
            background-color: #0056b3;
          }

          .banner-widget .close-btn {
            background: #ccc;
            color: #333;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            font-size: 14px;
            text-align: center;
            line-height: 24px;
            cursor: pointer;
          }

          .banner-widget .close-btn:hover {
            background: #999;
          }
        `;
        document.head.appendChild(style); // 스타일을 <head>에 추가
      }

      // 배너 요소 생성
      const banner = document.createElement('div');
      banner.className = 'banner-widget';
      banner.id = 'dynamicBanner';

      // 배너 내용 추가
      banner.innerHTML = `
        <div class="banner-text">
          🎉 Sign up now and get 20% off on your first purchase! <strong>Don't miss out!</strong>
        </div>
        <a href="#" class="cta-button">Sign Up Now</a>
        <button class="close-btn" onclick="removeBanner()">×</button>
      `;

      // 배너를 콘텐츠 영역의 상단에 삽입
      //const content = document.getElementById('content');
      const content = document.querySelector('.receiptWrap');
      content.insertAdjacentElement('afterbegin', banner);
    }

    // 배너 제거 함수
    function removeBanner() {
      const banner = document.getElementById('dynamicBanner');
      if (banner) banner.remove();
    }



$('label[for="addr_paymethod5"]').click(function(){
    addBannerWithStyles();
});
