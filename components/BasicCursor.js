import { useRef, useEffect, useState } from 'react';
import { ImArrowUpRight2 } from 'react-icons/im'
export default function BasicCursor({targets}) {
    const [cursorIcon, setCursorIcon] = useState(null);
    const [cursorText, setCursorText] = useState(null);

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
    };

    const toggleCursorSize = () => {
        const dot_size = cursorEnlarged.current ? '60px' : '20px';
        dot.current.style.width = dot_size;
        dot.current.style.height = dot_size;
    }

    const toggleIcon = () => {
        dotIcon.current.style.opacity = cursorEnlarged.current ? 1 : 0;
    }

    const toggleText = () => {
        outlineText.current.style.opacity = cursorEnlarged.current ? 1 : 0;
    }

    const mouseOverEvent = () => {
        cursorEnlarged.current = true;
        toggleCursorSize();
        // toggleText();
        // toggleIcon();
    }

    const mouseOutEvent = () => {
        cursorEnlarged.current = false;
        toggleCursorSize();
        // toggleText();
        // toggleIcon();
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

    useEffect(() => {
        addHoverEvent(targets);
        let [add, remove] = createAddAndRemove({
            "mousedown": mouseOverEvent,
            "mouseup": mouseOutEvent,
            "mousemove": mouseMoveEvent,
            "mouseenter": mouseEnterEvent,
            "mouseleave": mouseLeaveEvent
        })
        add();

        return () => {
            removeHoverEvent(targets);
            remove();
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const addHoverEvent = (targets) => {
        if (!targets) return;
      
        targets.forEach((target) => {
            [].forEach.call(document.querySelectorAll(target), (el) => {
                // if(target.includes(' a')){
                //     setCursorIcon(<ImArrowUpRight2/>)
                // }
              el.addEventListener('mouseenter', mouseOverEvent);
              el.addEventListener('mouseleave', mouseOutEvent);
            });
          });
    };
      
    const removeHoverEvent = (targets) => {
        if (!targets) return;
      
        targets.forEach((target) => {
            [].forEach.call(document.querySelectorAll(target), (el) => {
              el.removeEventListener('mouseenter', mouseEnterEvent);
              el.removeEventListener('mouseleave', mouseLeaveEvent);
            });
          });
    };

    return(
        <>
            <div ref={dot} className="cursor-dot">
                <div ref={dotIcon}>{cursorIcon}</div>
                <div ref={outlineText} className="cursor-text">
                    {cursorText}
                </div>
            </div>
        </>
    )
}