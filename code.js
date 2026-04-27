// --- BỘ TỪ ĐIỂN 3 NGÔN NGỮ ---
const translations = {
    vi: {
        musicOn: '🎶 Nhạc đang phát',
        musicOff: '🎵 Nhạc đang tắt',
        langBtn: '🇻🇳 Tiếng Việt',
        subtitle: 'Hế lô em cóa khỏe không',
        desc: 'Những bức ảnh anh thích nhất',
        footer: 'Thật ra là còn nhiều lắm',
        beginBtn: 'Chạm đê',
        instruction: 'Bấm vào ảnh để lướt qua nha babi',
        backBtn: '← Quay Lại Menu',
        counterPrefix: 'Bên nhau: ',
        counterDays: ' ngày ',
        letterTitle: 'Gửi Moka của anh...',
        letterP1: 'Em biết không, mặc dù là đang yêu xa nhưng anh dám chắc 1 ngày nào đó rồi anh với em sẽ về chung một nhà sớm thôii',
        letterP2: 'Hãy cố gắng chăm sóc, yêu thương bản thân của em nhiều hơn nhé! nhất là khi anh không có ở bên cạnh em, Nếu cần gì thì cứ gọi anh và anh sẽ đáp ứng ngay kể cả lúc anh đi ngủ',
        letterP3: 'Cảm ơn em vì đã quan tâm, yêu thương anh. Anh thương em nhất, yêu em nhất, và cũng nhớ em nhất nữa á baby. 我非常爱你!',
        letterSig: 'Tái bút: Thành Nhân đẹp trai số 1 phòng gym',
        popMessages: ["Nhớ em 💖", "Thương em 😘", "Xinh vcl 😍", "My babyyyyy 💕", "Love you 💋"]
    },
    en: {
        musicOn: '🎶 Music Playing',
        musicOff: '🎵 Music Off',
        langBtn: '🇬🇧 English',
        subtitle: 'Hello, how are you doing?',
        desc: 'Top pictures I love',
        footer: 'Actually, there are many more',
        beginBtn: 'Touch Me',
        instruction: 'Tap the photos to flip through, baby',
        backBtn: '← Back to Menu',
        counterPrefix: 'Together: ',
        counterDays: ' days ',
        letterTitle: 'To my Moka...',
        letterP1: 'You know, even though we are miles apart, I am certain that one day soon, we will share a home together.',
        letterP2: 'Please take good care of yourself and love yourself more! Especially when I am not by your side. If you need anything, just call me, and I will be there, even if I am sleeping.',
        letterP3: 'Thank you for caring and loving me. I care for you the most, love you the most, and miss you the most, baby. I love you so much!',
        letterSig: 'P.S.: Thanh Nhan, the most handsome guy in the gym',
        popMessages: ["Miss you 💖", "Care for u 😘", "Gorgeous af 😍", "My babyyyyy 💕", "Love you 💋"]
    },
    zh: {
        musicOn: '🎶 音乐播放中',
        musicOff: '🎵 音乐已关',
        langBtn: '🇨🇳 中文',
        subtitle: '哈喽，你最近好吗？',
        desc: '我最爱的照片',
        footer: '其实还有很多',
        beginBtn: '点我',
        instruction: '点击照片翻页哦，宝贝',
        backBtn: '← 返回菜单',
        counterPrefix: '在一起: ',
        counterDays: ' 天 ',
        letterTitle: '致我的 Moka...',
        letterP1: '你知道吗，虽然我们是异地恋，但我坚信总有一天我们会很快拥有一个共同的家。',
        letterP2: '请多照顾自己，多爱自己一点！特别是我不在你身边的时候。如果需要什么尽管打给我，就算在睡觉我也会立刻答应你。',
        letterP3: '谢谢你对我的关心和爱。我最疼你，最爱你，也最想你，宝贝。我非常爱你！',
        letterSig: '附注：健身房第一帅哥，成仁',
        popMessages: ["想你 💖", "疼你 😘", "太美了 😍", "我的宝贝 💕", "爱你 💋"]
    }
};

// Đã đưa tiếng Anh ('en') lên làm mặc định
const langs = ['en', 'vi', 'zh'];
let langIndex = 0;
let currentLang = langs[langIndex];

// --- CẬP NHẬT MẢNG ẢNH 3 NGÔN NGỮ ---
const myPhotos = [
    { img: 'cf109cf86783e6ddbf92.jpg', quote_vi: 'Uầy tấm này trông yêu vãi chưởngggggg', quote_en: 'Wow, this pic is insanely lovelyyyy', quote_zh: '哇，这张照片太可爱了吧' },
    { img: 'b16165899ef21fac46e3.jpg', quote_vi: 'Vợ ai mà xinh thíiiiii', quote_en: 'Whose wife is this prettyyyy', quote_zh: '这是谁的老婆这么漂亮呀' },
    { img: '27762c9ed7e556bb0ff4.jpg', quote_vi: 'Em ơi em xinh vừa vừa thôi cho anh xinh chung với', quote_en: 'Baby, don\'t be too pretty, leave some for me', quote_zh: '宝贝，别太漂亮了，给我留点吧' },
    { img: '6a414b27a95c2802714d.jpg', quote_vi: 'Nhìn thôi là muốn thơm má r', quote_en: 'Just looking makes me want to kiss your cheeks', quote_zh: '光看就想亲你的脸颊' },
    { img: '1411caff3184b0dae995.jpg', quote_vi: 'Xinh vãi cả đái :333', quote_en: 'Freaking gorgeous :333', quote_zh: '太漂亮了吧 :333' },
    { img: 'a6246dc996b217ec4ea3.jpg', quote_vi: 'Hình như anh yêu em mất rồi', quote_en: 'Looks like I have fallen in love with you', quote_zh: '我好像爱上你了' },
    { img: '3e72409cbbe73ab963f6.jpg', quote_vi: 'Em này xinh giống Moka nhỉ', quote_en: 'This girl is as pretty as Moka', quote_zh: '这个女孩和 Moka 一样漂亮呢' },
    { img: 'c2ebce05357eb420ed6f.jpg', quote_vi: 'Cái đồ dễ thương này!?', quote_en: 'You cute little thing!?', quote_zh: '你这个小可爱！？' },
    { img: 'f5d3b43e4f45ce1b9754.jpg', quote_vi: 'Ai cho em dễ thương thế hả?????', quote_en: 'Who allowed you to be this cute?????', quote_zh: '谁允许你这么可爱的？？？？？' },
    { img: '2b70ab9d50e6d1b888f7.jpg', quote_vi: 'Cho anh hun 1 cái nhá :3', quote_en: 'Let me give you a kiss :3', quote_zh: '让我亲一下吧 :3' },
    { img: 'b35dcab031cbb095e9da.jpg', quote_vi: 'Chào người đẹp em có khỏe không?', quote_en: 'Hello beautiful, how are you?', quote_zh: '你好美女，你过得好吗？' },
    { img: '9aa6924a6931e86fb120.jpg', quote_vi: 'Ngày nào cũng phải vào nhìn ít nhất trăm lần', quote_en: 'I have to look at this at least a hundred times a day', quote_zh: '每天至少要看一百遍' },
    { img: '0efd7f10846b05355c7a.jpg', quote_vi: 'Anh thương em lắm đó babi', quote_en: 'I care for you so much, baby', quote_zh: '我好疼你啊宝贝' },
    { img: 'ddbae1561a2d9b73c23c.jpg', quote_vi: 'Anh yêu em lắm luôn cục dàng ơi:3', quote_en: 'I love you so much, my precious :3', quote_zh: '我好爱你啊我的宝贝 :3' },
    { img: 'cb2061c39ab81be642a9.jpg', quote_vi: 'Góc nghiêng xinh dữ dặ', quote_en: 'Your side profile is stunning', quote_zh: '侧颜太绝了' },
    { img: 'aa4c4bafb0d4318a68c5.jpg', quote_vi: 'Cảm ơn em đã xuất hiện trong cuộc đời anh', quote_en: 'Thank you for showing up in my life', quote_zh: '谢谢你出现在我的生命里' },
    { img: '718496676d1cec42b50d.jpg', quote_vi: '我爱你', quote_en: 'I love you', quote_zh: '我爱你' },
    { img: 'd7d02c32d74956170f58.jpg', quote_vi: 'Mình bên nhau tới già luôn em nhó', quote_en: 'Let\'s be together until we are old', quote_zh: '我们要一起到老哦' },
    { img: '3fa43b89c1f240ac19e3.jpg', quote_vi: 'Muốn cắn cái mỏ của em geeeee', quote_en: 'I just wanna bite your lips geeeee', quote_zh: '好想咬你的嘴唇啊' },
    { img: 'd28605a4ffdf7e8127ce.jpg', quote_vi: 'Tấm này rate 36/36', quote_en: 'This one is rated 36/36', quote_zh: '这张照片我给 36/36 分' },
    { img: '91ad408bbaf03bae62e1.jpg', quote_vi: 'Awww cute vãi cứttttt', quote_en: 'Awww cute af', quote_zh: '啊啊啊太可爱了' },
    { img: '4f03f6270c5c8d02d44d.jpg', quote_vi: 'Ước gì được chụp chung vs em tấm này', quote_en: 'Wish I could take a picture with you here', quote_zh: '真希望这张能和你合影' },
    { img: 'd5859cbe66c5e79bbed4.jpg', quote_vi: '我好疼你', quote_en: 'I care for you so much', quote_zh: '我好疼你' },
    { img: '003ba8025279d3278a68.jpg', quote_vi: 'Em ơi? Em? em? sao mà em xinh vãi chưởng thế?', quote_en: 'Baby? Baby? Why are you so damn pretty?', quote_zh: '宝贝？宝贝？你怎么这么漂亮？' },
    { img: '26780640fc3b7d65242a.jpg', quote_vi: 'Hình như anh phải lòng em nữa rồi:))))', quote_en: 'I think I am falling for you all over again :))))', quote_zh: '我好像又爱上你了 :))))' },
    { img: 'c7cb2ff6d58d54d30d9c.jpg', quote_vi: 'Chắc anh dùng may mắn cả đời để thấy được bức tuyệt phẩm này r', quote_en: 'I must have used a lifetime of luck to see this masterpiece', quote_zh: '我大概用了一辈子的运气才看到这幅杰作' },
    { img: '19774045ba3e3b60622f.jpg', quote_vi: 'Em yêu rau má', quote_en: 'You love pennywort', quote_zh: '你爱喝积雪草' }
];

// Dùng hàm sort kết hợp Math.random() để xáo trộn mảng ảnh ngẫu nhiên
let stack = [...myPhotos].sort(() => Math.random() - 0.5);
let isAnimating = false;

// --- LOGIC CHUYỂN 3 NGÔN NGỮ ---
function toggleLanguage() {
    langIndex = (langIndex + 1) % 3;
    currentLang = langs[langIndex];
    applyLanguage();
}

function applyLanguage() {
    const t = translations[currentLang];
    
    document.getElementById('langToggle').innerHTML = t.langBtn;
    document.getElementById('t_subtitle').innerHTML = t.subtitle;
    document.getElementById('t_desc').innerHTML = t.desc;
    document.getElementById('t_footer').innerHTML = t.footer;
    document.getElementById('t_beginBtn').innerHTML = t.beginBtn;
    document.getElementById('t_instruction').innerHTML = t.instruction;
    document.getElementById('t_backBtn').innerHTML = t.backBtn;
    
    document.getElementById('t_letterTitle').innerHTML = t.letterTitle;
    document.getElementById('t_letterP1').innerHTML = t.letterP1;
    document.getElementById('t_letterP2').innerHTML = t.letterP2;
    document.getElementById('t_letterP3').innerHTML = t.letterP3;
    document.getElementById('t_letterSig').innerHTML = t.letterSig;

    const music = document.getElementById('bgMusic');
    if (!music.paused) {
        document.getElementById('musicToggle').innerHTML = t.musicOn;
    } else {
        document.getElementById('musicToggle').innerHTML = t.musicOff;
    }

    const currentCards = document.querySelectorAll('.stack-card');
    currentCards.forEach((card) => {
        const bgImg = card.querySelector('.page-image').style.backgroundImage;
        const photoObj = myPhotos.find(p => bgImg.includes(p.img));
        if (photoObj) {
            let quoteText = '';
            if (currentLang === 'vi') quoteText = photoObj.quote_vi;
            else if (currentLang === 'en') quoteText = photoObj.quote_en;
            else quoteText = photoObj.quote_zh;
            card.querySelector('.page-quote').innerHTML = `"${quoteText}"`;
        }
    });
    
    updateLoveCounter();
}

// --- LOGIC HỘP THƯ BÍ MẬT ---
function openLetter() {
    document.getElementById('letterModal').style.display = 'flex';
}
function closeLetter() {
    document.getElementById('letterModal').style.display = 'none';
}
window.onclick = function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const t = translations[currentLang];
    if (music.paused) {
        music.play();
        toggleBtn.innerHTML = t.musicOn;
    } else {
        music.pause();
        toggleBtn.innerHTML = t.musicOff;
    }
}

function startBook() {
    const landingPage = document.getElementById('landingPage');
    const bookView = document.getElementById('bookView');
    const music = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const t = translations[currentLang];
    
    if(music) {
        music.play().then(() => {
            toggleBtn.innerHTML = t.musicOn;
        }).catch(e => {
            toggleBtn.innerHTML = t.musicOff;
        });
    }

    landingPage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    landingPage.style.opacity = '0';
    landingPage.style.transform = 'scale(1.15)'; 
    
    setTimeout(() => {
        landingPage.style.display = 'none';
        bookView.style.display = 'flex';
        initStack();
    }, 600);
}

function createFallingPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    const shapes = ['❀', '✿', '💖', '💕'];
    petal.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.fontSize = (Math.random() * 12 + 12) + 'px';
    const fallDur = Math.random() * 4 + 5;
    petal.style.animationDuration = `${fallDur}s, ${Math.random() * 2 + 2}s`;
    document.getElementById('heartsContainer').appendChild(petal);
    setTimeout(() => petal.remove(), fallDur * 1000);
}
setInterval(createFallingPetal, 400);

function createSparkles(e) {
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        sparkle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'px');
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
}

function createFloatingMessage(e) {
    const msgs = translations[currentLang].popMessages;
    const msg = document.createElement('div');
    msg.className = 'floating-msg';
    msg.innerText = msgs[Math.floor(Math.random() * msgs.length)];
    msg.style.left = e.clientX + 'px';
    msg.style.top = e.clientY + 'px';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 1500);
}

function initStack() {
    const container = document.getElementById('stackContainer');
    container.innerHTML = '';
    stack.forEach(item => {
        const card = document.createElement('div');
        card.className = 'stack-card';
        
        let quoteText = '';
        if (currentLang === 'vi') quoteText = item.quote_vi;
        else if (currentLang === 'en') quoteText = item.quote_en;
        else quoteText = item.quote_zh;

        card.innerHTML = `<div class="page-image" style="background-image: url('${item.img}')"></div>
                          <div class="page-quote">"${quoteText}"</div>`;
        container.appendChild(card);
        
        card.addEventListener('mousemove', (e) => {
            if (isAnimating) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            card.style.transform = `perspective(1000px) translateZ(30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            if (!isAnimating) updateStackVisuals();
        });
    });
    updateStackVisuals();
}

function updateStackVisuals() {
    const cards = document.querySelectorAll('.stack-card');
    cards.forEach((card, index) => {
        const countFromTop = cards.length - 1 - index;
        card.style.zIndex = index;
        card.style.transform = `translateY(${countFromTop * -15}px) scale(${1 - (countFromTop * 0.05)}) rotateZ(${countFromTop * 3}deg)`;
        
        if (index === cards.length - 1) {
            card.onclick = (e) => {
                createSparkles(e);
                createFloatingMessage(e);
                sendToBack();
            };
        } else {
            card.onclick = null;
        }
    });
}

function sendToBack() {
    if (isAnimating) return;
    isAnimating = true;
    const container = document.getElementById('stackContainer');
    const cards = container.querySelectorAll('.stack-card');
    const topCard = cards[cards.length - 1];

    topCard.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s ease-out';
    topCard.style.transform = 'translateX(150%) rotateZ(25deg) translateY(50px) scale(0.5)';
    topCard.style.opacity = '0';

    setTimeout(() => {
        topCard.style.transition = 'none';
        container.prepend(topCard); 
        const countFromTop = cards.length - 1;
        topCard.style.transform = `translateY(${countFromTop * -15}px) scale(${1 - (countFromTop * 0.05)}) rotateZ(${countFromTop * 3}deg)`;
        
        void topCard.offsetWidth;

        updateStackVisuals();
        topCard.style.opacity = '1';
        isAnimating = false;
    }, 450);
}

function backToLanding() {
    location.reload(); 
}

function updateLoveCounter() {
    const startDate = new Date('2026-02-18'); 
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const counterEl = document.getElementById('loveCounter');
    const t = translations[currentLang];
    if (counterEl) {
        counterEl.innerHTML = `${t.counterPrefix}${days}${t.counterDays}${hours}h ${mins}m ${secs}s`;
    }
}

applyLanguage();
setInterval(updateLoveCounter, 1000);