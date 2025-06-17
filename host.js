function onMainLoaded() {

var vh;
var vw;
var vhpx;
var vwpx;

var wheelDelta = 0;
var currentScene = 0;
var isAnimating = false;
const totalScenes = 9;

var touchStartY = 0;
var touchEndY = 0;

var upScale;
var isLandscape;

var scaleRadiusCircle;

gsap.registerPlugin(CustomEase);
CustomEase.create("smoothEase", "M0,0 C0.35,0 0.65,1 1,1");

const elements = {
    background_basic: document.querySelector('.background_basic'),
    background_sky: document.querySelector('.background_sky'),
    logo: document.querySelector('.logo'),
    scroll_to_begin: document.querySelector('.scroll_to_begin'),
    background_landscape: document.querySelector('.background_landscape'),
    landscape: document.querySelector('.landscape'),
    title_scene2: document.querySelector('.title_scene2'),
    detail_scene2: document.querySelector('.detail_scene2'),
    bg_learnmore_scene2: document.querySelector('.bg_learnmore_scene2'),
    menu: document.querySelector('.menu'),
    info_page_chrome: document.querySelector('.info_page_chrome'),
    background_solid_color: document.querySelector('.background_solid_color'),
    julien_tromeur_6UDansS_rPI_unsplash: document.querySelector('.julien_tromeur_6UDansS_rPI_unsplash'),
    element_main_scene4: document.querySelector('.element_main_scene4'),
    element_scene4: document.querySelector('.element_scene4'),
    rectangle_right: document.querySelector('.rectangle_right'),
    rectangle_left: document.querySelector('.rectangle_left'),
    circle_scene5: document.querySelector('.circle_scene5'),
    title_scene5: document.querySelector('.title_scene5'),
    info_scene5: document.querySelector('.info_scene5'),
    card_type_left: document.querySelector('.card_type_left'),
    card_type_a: document.querySelector('.card_type_a'),
    card_type_b: document.querySelector('.card_type_b'),
    menu_path: document.querySelectorAll(".menu path"),

    info_page_chrome_v2: document.querySelector('.info_page_chrome_v2'),
    card_element: document.querySelectorAll('.card_element'),
    background_solid_color_v2: document.querySelector('.background_solid_color_v2'),
    background_solid_color_v3: document.querySelector('.background_solid_color_v3'),
    info_page_chrome_v3: document.querySelector('.info_page_chrome_v3'),
    info_page_chrome_v4: document.querySelector('.info_page_chrome_v4'),
    site_footer: document.querySelector('.site_footer'),
    contact_us: document.querySelector('.contact_us'),

    btn_open_menu: document.querySelector('.btn_open_menu'),
    btn_close_menu: document.querySelector('.btn_close_menu'),
    menu_container: document.querySelector('.menu_container'),
    menu_info_page_chrome_v3_left: document.querySelector('.menu_info_page_chrome_v3_left'),
    menu_info_page_chrome_v3_right: document.querySelector('.menu_info_page_chrome_v3_right'),
    form_contact_signup: document.querySelector('.form_contact_signup'),
    decorative_text_1: document.querySelector('.decorative_text_1'),

    text_decorative_2: document.querySelector('.text_decorative_2'),
    text_decorative_3: document.querySelector('.text_decorative_3'),
};

elements.background_solid_color_v2_fill_color = [
  elements.background_solid_color_v2.querySelector("path"),
  [...elements.background_solid_color_v2.querySelectorAll(".fill_color")]
];

// Handle Data Version
if(data_version == 2) {
    elements.intro_cloud = document.querySelector('.intro_cloud');
    elements.intro_cloud_2 = document.querySelector('.intro_cloud_2');
    elements.church_3 = document.querySelector('.church_3');
}

setRealHeightL();
function setRealHeightL() {
    vh = window.innerHeight;
    vw = window.innerWidth;
    vhpx = vh * 0.01;
    vwpx = vw * 0.01;
    upScale = vh/vw;
    isLandscape = upScale < 1;
    const radiusCircle = (Math.sqrt(vw ** 2 + vh ** 2) + 1).toFixed(0);
    const rect = elements.circle_scene5.getBoundingClientRect();
    scaleRadiusCircle = radiusCircle/rect.width;
}
window.addEventListener('resize', setRealHeightL);

gsap.set(elements.circle_scene5, {
    xPercent: -50,
    yPercent: isLandscape ? 1.75 : 33,
});
gsap.set(elements.card_element[0], {
    xPercent: isLandscape ? -174 : -160,
    yPercent: isLandscape ? -44.2 : -50
});
gsap.set(elements.card_element[1], {
    xPercent: -50,
    yPercent: isLandscape ? -44.2 : -50
});
gsap.set(elements.card_element[2], {
    xPercent: isLandscape ? 74 : 60,
    yPercent: isLandscape ? -44.2 : -50
});

if(upScale <= 0.475) {
    gsap.set(elements.title_scene2, {
        xPercent: -50
    });
    gsap.set(elements.detail_scene2, {
        xPercent: -50
    });
    gsap.set(elements.bg_learnmore_scene2, {
        xPercent: -50
    });
}

// Animation Timelines
const scenes = {
    scene9: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.menu, {
        y: "-20vh",
        x: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .from(elements.info_page_chrome_v3, {
        yPercent: 130,
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .from(elements.site_footer, {
        ...(upScale <= 0.475 ? {
            x: -(50*vwpx - 14*vhpx)
        } : {
            xPercent: -160
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .from(elements.contact_us, {
        ...(upScale <= 0.475 ? {
            x: 50*vwpx - 51*vhpx
        } : {
            xPercent: 140
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .to(elements.logo, {
        scale: isLandscape ? 0.794 : 0.9,
        yPercent: isLandscape ? 27.91 : 30,
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .to(elements.text_decorative_2, {
        x: 0,
        xPercent: -100,
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .to(elements.text_decorative_3, {
        x: 0,
        xPercent: 100,
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0.15)
    .to(elements.decorative_text_1, {
        yPercent: -150,
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0)
    .to(elements.background_solid_color_v3, {
        top: isLandscape ? "-15%" : "-22.5%",
        force3D: true,
        ease: "smoothEase",
        duration: 0.75
    }, 0)
    .to(elements.info_page_chrome_v4, {
        x: isLandscape ? (upScale <= 0.475 ? (100*vwpx - 88.89*vhpx) : 97*vwpx) : 50*vwpx + 65*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: isLandscape ? 0.8 : 0.4
    }, 0)
    .to(elements.form_contact_signup, {
        x: isLandscape ? (upScale <= 0.475 ? -(50*vwpx + 84.07*vhpx) : -100*vwpx) : -50*vwpx -22*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: isLandscape ? 0.8 : 0.4
    }, 0)
    ,

    scene8: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.info_page_chrome_v2, {
        scale: 1.6,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0)
    .to(elements.background_solid_color_v2_fill_color[0], {
        fill: "#787878",
        force3D: true,
        ease: "smoothEase",
        duration: 1
    }, 0)
    .to(elements.background_solid_color_v2_fill_color[1], {
        backgroundColor: "#787878",
        force3D: true,
        ease: "smoothEase",
        duration: 1
    }, 0)
    .to(elements.background_solid_color_v2, {
        top: isLandscape ? "-15%" : "-22.5%",
        force3D: true,
        ease: "smoothEase",
        duration: 1
    }, 0)
    .from(elements.background_solid_color_v3, {
        yPercent: 35,
        force3D: true,
        ease: "smoothEase",
        duration: 0.3
    }, 0.8)
    .from(elements.info_page_chrome_v4, {
        x: isLandscape ? (upScale <= 0.475 ? -195.56*vhpx : -57*vwpx) : -50*vwpx -65*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0.5)
    .from(elements.form_contact_signup, {
        x: isLandscape ? (upScale <= 0.475 ? (50*vwpx - 16*vhpx) : 42*vwpx) : 50*vwpx + 21.5*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0.5)
    .from(elements.decorative_text_1, {
        yPercent: 350,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0.25)
    .to(elements.text_decorative_2, {
        x: isLandscape ? (upScale <= 0.475 ? 1400*upScale : 4.2*vwpx) : 12*vwpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0.5)
    .to(elements.text_decorative_3, {
        x: isLandscape ? (upScale <= 0.475 ? -1400*upScale : -4.2*vwpx) : -12*vwpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0.5)
    ,

    scene7: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.card_element, {
        x: (upScale > 1.7857142857142858 ? 162 : 135)  * vwpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0)
    .to(elements.info_page_chrome_v2, {
        top: "50%",
        scale: isLandscape ? 0.75 : 0.875,
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0)
    .from(elements.background_solid_color_v2, {
        yPercent: 30,
        force3D: true,
        ease: "smoothEase",
        duration: 0.3
    }, 0.4)
    ,

    scene6: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.background_solid_color, {
        y: isLandscape ? -20*vhpx : 50,
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
     }, 0)
    .to(elements.info_page_chrome, {
        yPercent: isLandscape ? 100 : 150,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.circle_scene5, {
        scale: scaleRadiusCircle,
        yPercent: -50,
        force3D: true,
        ease: "smoothEase",
        duration: 1
    }, 0.1)
    .from(elements.info_page_chrome_v2, {
        yPercent: 100,
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    .from(elements.card_element, {
        x: -(upScale > 1.7857142857142858 ? 162 : 135) * vwpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    ,

    scene5_element: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .from(elements.title_scene5, {
        ...(isLandscape ? {
            x: (upScale <= 0.475 ? 20.5*vhpx - 50*vwpx : -39*vwpx)
        } : {
            yPercent: -420
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.4
    }, 0)
    .from(elements.info_scene5, {
        ...(isLandscape ? {
            x: (upScale <= 0.475 ? 50*vwpx - 18.9*vhpx : 40*vwpx)
        } : {
            xPercent: 170
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.4
    }, 0)
    .from(elements.card_type_left, {
        ...(isLandscape ? {
            x: (upScale <= 0.475 ? 42*vhpx - 50*vwpx : -30*vwpx)
        } : {
            xPercent: -220
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.4
    }, 0)
    .from(elements.card_type_a, {
        ...(isLandscape ? {
            yPercent: 160
        } : {
            xPercent: 220
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.4
    }, 0)
    .from(elements.card_type_b, {
        ...(isLandscape ? {
            x: (upScale <= 0.475 ? 50*vwpx - 23*vhpx : 38*vwpx)
        } : {
            yPercent: 120
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.4
    }, 0)
    ,

    scene5: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.background_solid_color, {
        yPercent: 74.08,
        force3D: true,
        ease: "smoothEase",
        duration: 0.9
    }, 0)
    .to(elements.rectangle_right, {
        ...(isLandscape ? {
            x: 38*vwpx
        } : {
            yPercent: 200
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0)
    .to(elements.rectangle_left, {
        ...(isLandscape ? {
            x: -38*vwpx
        } : {
            yPercent: -230
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0)
    .to(elements.element_main_scene4, {
        ...(isLandscape ? {
            yPercent: -330
        } : {
            xPercent: -240
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0)
    .to(elements.julien_tromeur_6UDansS_rPI_unsplash, {
        ...(isLandscape ? {
            yPercent: 300
        } : {
            xPercent: 230
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0)
    .to(elements.element_scene4, {
        yPercent: 300,
        force3D: true,
        ease: "smoothEase",
        duration: 0.5
    }, 0)
    .to(elements.info_page_chrome, {
        scale: isLandscape ? (upScale <= 0.475 ? 1.3 : 1.31) : 0.385*upScale+0.615,
        top: isLandscape ? (upScale > 0.475 ? (-36.58*upScale+121.58)+"%" : "101%") : (-5.385*upScale+92.385)+"%",
        force3D: true,
        ease: "smoothEase", duration: 0.8
    }, 0)
    .from(elements.circle_scene5, {
        yPercent: 220,
        force3D: true,
        ease: "smoothEase",
        duration: 0.9
    }, 0)
    ,

    scene4: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.background_landscape, {
        xPercent: -30,
        yPercent: data_version == 2 ? 115 : 110,
        scale: 1.8,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.landscape, {
        xPercent: 60,
        yPercent: 100,
        scale: 1.8,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.background_basic, {
        opacity: 1,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0.25)
    .from(elements.info_page_chrome, {
        yPercent: 220,
        force3D: true,
        ease: "smoothEase",
        duration: 0.9
    }, 0)
    .from(elements.background_solid_color, {
        yPercent: -90,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0.3)
    .from(elements.julien_tromeur_6UDansS_rPI_unsplash, {
        ...(isLandscape ? {
            yPercent: -300
        } : {
            xPercent: -230
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    .from(elements.element_main_scene4, {
        ...(isLandscape ? {
            yPercent: 300
        } : {
            xPercent: 200
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    .from(elements.element_scene4, {
        yPercent: 300,
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    .from(elements.rectangle_right, {
        ...(isLandscape ? {
            x: 38*vwpx
        } : {
            yPercent: 200
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    .from(elements.rectangle_left, {
        ...(isLandscape ? {
            x: -38*vwpx
        } : {
            yPercent: -230
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.6
    }, 0.5)
    ,

    scene3: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .fromTo(elements.background_landscape,
        {
            xPercent: data_version == 3 ? (isLandscape ? 22.35 : 23) : 17,
            yPercent: data_version == 3 ? 17.4 : 5,
            scale: data_version == 3 ? 1.4 : 1.44
        },
        {
            xPercent: data_version == 2 ? (isLandscape ? -5.3 : 0) : 0,
            yPercent: (data_version == 3 && !isLandscape) ? 16.5 : (data_version == 2 ? (isLandscape ? -19.25 : 0) : 0),
            scale: (data_version == 3 && !isLandscape) ? 1.1 : 1,
            force3D: true,
            ease: "smoothEase",
            duration: 0.7
        }, 0)
    .fromTo(elements.landscape,
        {
            xPercent: data_version == 3 ? 18 : 6,
            yPercent: data_version == 3 ? (isLandscape ? -9 : -15) : 12.5,
            scale: data_version == 3 ? 1.5 : 1.295
        },
        {
            xPercent: data_version == 2 ? (isLandscape ? -10 : 12) : 0,
            yPercent: (data_version == 3 && !isLandscape) ? -5 : (data_version == 2 ? (isLandscape ? 40 : 2.5) : 0),
            right: "-12vh",
            scale: (data_version == 3 && !isLandscape) ? 1.1 : (data_version == 2 ? (isLandscape ? 1.5 : 1) : 1),
            force3D: true,
            ease: "smoothEase",
            duration: 0.7
        }, 0)
    .to(elements.title_scene2, {
        opacity: 0,
        xPercent: upScale <= 0.475 ? -50 : 0,
        y: 70*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.detail_scene2, {
        opacity: 0,
        xPercent: upScale <= 0.475 ? -50 : 0,
        y: 70*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.bg_learnmore_scene2, {
        opacity: 0,
        xPercent: upScale <= 0.475 ? -50 : 0,
        y: 70*vhpx,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    ,

    scene2_text: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .from(elements.title_scene2, {
        x: "100vw",
        y: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0.2)
    .from(elements.detail_scene2,{
        x: "-100vw",
        y: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0.2)
    .from(elements.bg_learnmore_scene2, {
        y: "50vh",
        x: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0.2)
    .from(elements.menu, {
        y: "-20vh",
        x: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.8
    }, 0.2)
    ,

    scene2: gsap.timeline({
        paused: true,
        onUpdate: () => updateIsAnimating()
    })
    .to(elements.logo, {
        y: -(isLandscape ? (upScale <= 0.475 ? 16 : 30) : 7.71428571429*upScale+19.2857142857) * vh * 0.01,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.logo, {
        scale: 0.1997*upScale+0.1375,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .to(elements.scroll_to_begin, {
        yPercent: 320,
        opacity: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.2
    }, 0)
    .from(elements.background_landscape, {
        yPercent: 100,
        xPercent: -6.25,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .from(elements.landscape, {
        xPercent: (data_version == 2 && !isLandscape) ? 117.5 : 105.5,
        yPercent: data_version == 3 ? 25 : ((data_version == 2 && !isLandscape) ? 30 : 23.15),
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    ,
};

// Handle Data Version
if(data_version !== 3) {
    scenes.scene6.to(elements.menu_path, {
        fill: data_version == 2 ? "#30485B" : "#4C4C4C",
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
    scenes.scene5.to(elements.menu_path, {
        fill: data_version == 2 ? "#50718C" : "#787878",
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
}
if(data_version == 2) {
    scenes.scene4.to(elements.church_3, {
        xPercent: isLandscape ? -44 : 0,
        yPercent: 110,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
    scenes.scene3.to(elements.church_3, {
        xPercent: isLandscape ? -44 : -5,
        yPercent: isLandscape ? -4 : -4,
        scale: isLandscape ? 1.125 : 0.8,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
    scenes.scene2.to(elements.background_sky, {
        opacity: 1,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
    scenes.scene2.from(elements.church_3, {
        xPercent: 31,
        yPercent: 74,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
} else {
    scenes.scene3.to(elements.background_sky, {
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    scenes.scene2.to(elements.background_sky, {
        scale: 1.179,
        xPercent: 3.675,
        yPercent: -1,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
}

function updateIsAnimating() {
    isAnimating =
        scenes.scene2.isActive() ||
        scenes.scene2_text.isActive() ||
        scenes.scene3?.isActive() ||
        scenes.scene4?.isActive() ||
        scenes.scene5?.isActive() ||
        scenes.scene5_element?.isActive() ||
        scenes.scene6?.isActive() ||
        scenes.scene7?.isActive() ||
        scenes.scene8?.isActive() ||
        scenes.scene9?.isActive() ||
        false;
    // console.log(isAnimating);
}

function animateScene(sceneNumber, isReverse = false) {
    switch(sceneNumber) {
        case 0:
            scenes.scene2_text.reverse();
            setTimeout(() => {
                scenes.scene2.reverse();
                setTimeout(() => elements.scroll_to_begin.classList.add('moveUpAndBack') , 650);
            }, 200);
            break;
        case 1:
            if(!isReverse) {
                elements.scroll_to_begin.classList.remove('moveUpAndBack');
                scenes.scene2.play();
                scenes.scene2_text.play();
            } else {
                scenes.scene3.reverse();
            }
            break;
        case 2:
            if(!isReverse) {
                scenes.scene3.play();
            } else {
                scenes.scene4.reverse();
            }
            break;
        case 3:
            if(!isReverse) {
                scenes.scene4.play();
            } else {
                scenes.scene5_element.reverse();
                scenes.scene5.reverse();
            }
            break;
        case 4:
            if(!isReverse) {
                scenes.scene5.play();
                setTimeout(() => {
                    scenes.scene5_element.play();
                }, 500);
            } else {
                scenes.scene6.reverse();
                setTimeout(() => {
                    scenes.scene5_element.play();
                }, 600);
            }
            break;
        case 5:
            if(!isReverse) {
                scenes.scene5_element.reverse();
                setTimeout(() => {
                    scenes.scene6.play();
                }, 200);
            } else {
                scenes.scene7.reverse();
            }
            break;
        case 6:
            if(!isReverse) {
                scenes.scene7.play();
            } else {
                scenes.scene8.reverse();
            }
            break;
        case 7:
            if(!isReverse) {
                scenes.scene8.play();
            } else {
                scenes.scene9.reverse();
            }
            break;
        case 8:
            scenes.scene9.play();
            break;
    }
}

var canScroll = true;

window.addEventListener('wheel', (event) => {
    if (isAnimating || !canScroll) return;

    const target = event.target;
    if (
        target.closest('textarea, input, [contenteditable="true"]') ||
        document.activeElement.matches('textarea, input, [contenteditable="true"]')
    ) {
        return;
    }

    wheelDelta += Math.abs(event.deltaY);
    let timeset = 700;

    if (wheelDelta >= 125) {
        canScroll = false;
        wheelDelta = 0;
        
        if (event.deltaY > 0) {
            if (currentScene < totalScenes - 1) {
                currentScene++;
                animateScene(currentScene);
            } else {
                timeset = 0;
            }
        } else {
            if (currentScene > 0) {
                currentScene--;
                animateScene(currentScene, true);
            } else {
                timeset = 0;
            }
        }

        // Add delay before allowing next scroll
        setTimeout(() => {
            canScroll = true;
            wheelDelta = 0;
        }, timeset);
    }
});

// Add touch event listeners
window.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
});

window.addEventListener('touchmove', (event) => {
    if (isAnimating || !canScroll) return;

    const target = event.target;
    if (
        target.closest('textarea, input, [contenteditable="true"]') ||
        document.activeElement.matches('textarea, input, [contenteditable="true"]')
    ) {
        return;
    }
    
    touchEndY = event.touches[0].clientY;
    const touchDelta = Math.abs(touchEndY - touchStartY);
    let timeset = 700;
    
    if (touchDelta >= 100) {
        canScroll = false;
        // Update current scene based on swipe direction
        if (touchEndY < touchStartY) { // Swipe up
            if (currentScene < totalScenes - 1) {
                currentScene++;
                animateScene(currentScene);
            } else {
                timeset = 0;
            }
        } else { // Swipe down
            if (currentScene > 0) {
                currentScene--;
                animateScene(currentScene, true);
            } else {
                timeset = 0;
            }
        }
        // Reset touch positions
        touchStartY = touchEndY;

        // Add delay before allowing next scroll
        setTimeout(() => {
            canScroll = true;
            touchStartY = touchEndY;
        }, timeset);
    }
});

window.addEventListener('touchend', () => {
    touchStartY = 0;
    touchEndY = 0;
});

elements.card_element.forEach((el) => {
    el.addEventListener("click", function () {
        moveCardElementScene6(this, 0.7);
    })
});

var card_element_active = 1;

function moveCardElementScene6(elm, timeset = 0) {
    if (elm.classList.contains('active') || isAnimating) return;
    let tl = gsap.timeline({ paused: true });
    for( let i = 0 ; i < elements.card_element.length ; i++ ) {
        if(elm === elements.card_element[i]) {
            elements.card_element[card_element_active].classList.remove('active');
            elm.classList.add('active');

            const leftIndex = i === 0 ? 2 : i === 2 ? 1 : i - 1;
            const rightIndex = i === 0 ? 1 : i === 2 ? 0 : i + 1;
            let zIndexRight = 22;
            let zIndexLeft = 21;

            if(elements.card_element[card_element_active] === elements.card_element[leftIndex]) {
                zIndexRight = 21;
                zIndexLeft = 22;
                toLeft = true;
            }
            card_element_active = i;
            
            tl.to(elements.card_element[i], {
                zIndex: 23,
                force3D: true,
                duration: 0
            }, 0)
              .to(elements.card_element[i], {
                xPercent: -50,
                force3D: true,
                ease: "power1.out",
                duration: timeset
            }, 0)

            tl.to(elements.card_element[rightIndex], {
                zIndex: zIndexRight,
                force3D: true,
                duration: 0
            }, 0)
              .to(elements.card_element[rightIndex], {
                xPercent: isLandscape ? 74 : 60,
                force3D: true,
                ease: "power1.out",
                duration: timeset
            }, 0)

            tl.to(elements.card_element[leftIndex], {
                zIndex: zIndexLeft,
                force3D: true,
                duration: 0
            }, 0)
              .to(elements.card_element[leftIndex], {
                xPercent: isLandscape ? -174 : -160,
                force3D: true,
                ease: "power1.out",
                duration: timeset
            }, 0)

            break;
        }
    }
    tl.play();
}
const scenesMenu = gsap.timeline({
        paused: true
    })
    .from(elements.menu_container, {
        xPercent: 100,
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .from(elements.menu_info_page_chrome_v3_left, {
        ...(isLandscape ? {
            xPercent: -100
        } : {
            yPercent: -100
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0)
    .from(elements.menu_info_page_chrome_v3_right, {
        ...(isLandscape ? {
            xPercent: 100
        } : {
            yPercent: 100
        }),
        force3D: true,
        ease: "smoothEase",
        duration: 0.7
    }, 0);
var flag_close_menu = true;
var re_click_menu = true;
elements.menu.addEventListener('click', () => {
    animationMenu();
});
elements.menu_container.querySelector(".menu_close").addEventListener('click', () => {
    if(flag_close_menu) return;
    animationMenu();
});
function changeIconMenu() {
    gsap.to(elements.btn_open_menu, {
        opacity: flag_close_menu ? 1 : 0,
        scale: flag_close_menu ? 1 : 0,
        duration: 0.3,
        force3D: true,
        ease: "smoothEase"
    });
    gsap.to(elements.btn_close_menu, {
        opacity: flag_close_menu ? 0 : 1,
        scale: flag_close_menu ? 0 : 1,
        duration: 0.3,
        force3D: true,
        ease: "smoothEase"
    });
}
function animationMenu() {
    if(!re_click_menu || flag_close_menu && isAnimating) return;
    re_click_menu = false;
    setTimeout(() => {
        re_click_menu = true;
    }, 500);
    flag_close_menu = !flag_close_menu;
    if (flag_close_menu) {
        scenesMenu.reverse();
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    } else {
        isAnimating = true;
        scenesMenu.play();
    }
    changeIconMenu();
};
var isSpamClickLogo = false;
elements.logo.addEventListener('click', () => {
    if (isAnimating && flag_close_menu || isSpamClickLogo) return;
    isSpamClickLogo = true;
    let changeIsAnimating = false;
    if(currentScene == 0 || currentScene == 6 || currentScene == 7) {
        changeIsAnimating = true;
        isAnimating = true;
    }
    let scaleValue = gsap.getProperty(elements.logo, "scale");
    gsap.timeline({
        onComplete: () => {
            isSpamClickLogo = false;
            if(changeIsAnimating) {
                isAnimating = false;
            }
        }
    })
    .to(elements.logo, {
        scale: scaleValue + 0.05,
        duration: 0.3,
        force3D: true,
        ease: "smoothEase"
    })
    .to(elements.logo, {
        scale: scaleValue,
        duration: 0.3,
        force3D: true,
        ease: "smoothEase"
    });
});

hideLoading();

}