import { useRef, useEffect, useState } from 'react';
import { BsMouseFill } from 'react-icons/bs';
import { ImArrowUpRight2 } from 'react-icons/im';
import { useTranslation } from 'next-i18next';
export default function Cursor({targets}) {
    const [cursorIcon, setCursorIcon] = useState(null);
    const { t, i18n } = useTranslation('common');

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);
    const indicateText = useRef(false);
    const showIcon = useRef(false);

    const endX = useRef(0);
    const endY = useRef(0);

    const requestRef = useRef(null);

    const dot = useRef(null);
    const outlineText = useRef(null);
    const dotIcon = useRef(null);

    const toggleCursorVisibility = () => {
        dot.current.style.opacity = cursorVisible.current ? 1 : 0;
        toggleIcon();
        toggleHoverText();
    };

    const toggleCursorSize = (normal=true) => {
        const dot_size = cursorEnlarged.current ? '60px' : '20px';
        dot.current.style.width = dot_size;
        dot.current.style.height = dot_size;
        // const default_border = 'none';
        // const default_bg = 'rgba(0,0,0,0.7)'
        function defOrNorm(def, special){
            return cursorEnlarged.current ? (normal ? def : special) : def
        }

        // dot.current.style.border = cursorEnlarged.current ? (normal ? 'none' : '2px solid rgba(0,0,0,0.7)') : 'none';
        // dot.current.style.backgroundColor = cursorEnlarged.current ? (normal ? 'rgba(0,0,0,0.7)' : 'transparent') : 'rgba(0,0,0,0.7)';
        // dot.current.style.backgroundColor = defOrNorm(default_bg, 'white')
        dot.current.classList = defOrNorm('cursor-dot', 'cursor-dot special')
    }

    const toggleHoverText = () => {
        outlineText.current.style.opacity = indicateText.current ? 1 : 0;
    }

    const toggleIcon = () => {
        dotIcon.current.style.opacity = showIcon.current ? 1 : 0;
    }

    const mouseOverEvent = (normal=true) => {
        cursorEnlarged.current = true;
        toggleCursorSize(normal);
    }

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
    }

    const mouseEnterEvent = () => {
        cursorVisible.current = true;
        toggleCursorVisibility();
    }

    const mouseLeaveEvent = () => {
        cursorVisible.current = false;
        toggleCursorVisibility();
    }

    const mouseMoveEvent = e => {
        mouseEnterEvent();

        endX.current = e.pageX;
        endY.current = e.pageY;
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
    }

    // endX, endY
    useEffect(() => {
        endX.current = window.innerWidth / 2;
        endY.current = window.innerHeight / 2;  
    },[]);

    function createAddAndRemove(events){
        function addListeners(){
            for(let [k, v] of Object.entries(events)){
                document.addEventListener(k, v)
            }
        }
        function removeListeners() {
            for(let [k, v] of Object.entries(events)){
                document.removeEventListener(k, v)
            }
        }
        return [addListeners, removeListeners]
    }

    const stopHoverEvent = (e) => {
        mouseOutEvent();
        indicateText.current = false;
        toggleHoverText();
        showIcon.current = false;
        toggleIcon();
    }

    const targetHoverEvent = (text=null, icon=null) => {
        function pseudoHover() {
            if(text){
                indicateText.current = true;
                rotateText(text);
                toggleHoverText();
            }
            if(icon){
                mouseOverEvent();
                showIcon.current = true;
                setCursorIcon(icon);
                toggleIcon();
            } else {
                mouseOverEvent(false);
            }
        }
        return pseudoHover;
    }

    const addOrRemoveHoverEvent = (targets, doAdd) => {
        if (!targets) return; 
        targets.forEach((target) => {
            [].forEach.call(document.querySelectorAll(target), (el) => {

                let hoverFunc = targetHoverEvent();
                if(target === '#work a.linkable'){
                    hoverFunc = targetHoverEvent((el.querySelector(".work-title").textContent + ' ').repeat(1), <ImArrowUpRight2/>)
                } else if(el.textContent.length > 9 || target === '.read-more' || target === '.stamp'){
                    hoverFunc = targetHoverEvent((el.textContent + ' ').repeat(1), <ImArrowUpRight2/>)
                } else if(target.includes(' a')){
                    hoverFunc = targetHoverEvent((el.textContent + ' ').repeat(3), <ImArrowUpRight2/>)
                }
                if(target === '#postcard' || target === '.featured'){
                    hoverFunc = targetHoverEvent('drag or scroll ', <BsMouseFill/>);
                } 

              if(doAdd){
                el.addEventListener('mouseenter', hoverFunc);
                // if(target === '#postcard'){
                    el.addEventListener('mousemove', hoverFunc);
                // }
                el.addEventListener('mouseleave', stopHoverEvent);
              } else {
                el.removeEventListener('mouseenter', hoverFunc);
                // if(target === '#postcard'){
                    el.removeEventListener('mousemove', hoverFunc);
                // }
                el.removeEventListener('mouseleave', stopHoverEvent);
              }
            });
          });
        
    }

    function rotateText(spintext){
        if(outlineText){
            outlineText.current.innerHTML = spintext.replace(/\D/g, "<span>$&</span>");
            const spans = outlineText.current.querySelectorAll('span')
            for(let i = 0; i < spans.length; i++){
                if(spans[i].innerHTML === "i") {
                    spans[i].style.paddingLeft = '3px';
                    spans[i].style.paddingRight = '3px';
                }
                spans[i].style.transform = "rotate(" + i * (360/(spans.length)) + "deg)";
            }
        }
    }

    useEffect(() => {
        addOrRemoveHoverEvent(targets, true);
        let [add, remove] = createAddAndRemove({
            "mousedown": mouseOverEvent,
            "mouseup": mouseOutEvent,
            "mousemove": mouseMoveEvent,
            "mouseenter": mouseEnterEvent,
            "mouseleave": mouseLeaveEvent
        })
        add();

        return () => {
            addOrRemoveHoverEvent(targets, false);
            remove();
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return(
        <>
            <div ref={dot} className="cursor-dot">
                <div ref={dotIcon}>{cursorIcon}</div>
                <div ref={outlineText} className="cursor-text"/>
            </div>
        </>
    )
}