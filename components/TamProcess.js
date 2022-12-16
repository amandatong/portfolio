import {useRef} from "react";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";

const variants = {
    hidden: { pathLength: 0 },
    shown: { pathLength: 1}
}

export default function TamProcess() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
    return(
        // <?xml version="1.0" encoding="UTF-8"?>
        <motion.svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1175.65 658.56" ref={ref}>
                    <motion.path style={{fill:'none',stroke:'#F66B57',strokeMiterlimit:10,strokeWidth:'5px', pathLength: pathLength, opacity: opacity}}  
                    variants={variants} initial="hidden" transition={{duration:3, from:0}} animate={isInView ? 'shown' : 'hidden'} 
                        d="M.6,655.14c9.23,2.3,25.74,.18,44-5,108.72-30.86,97.06-365.3,152-371,49.33-5.12,93.36,205.96,139,201,52.57-5.71,46.78-291.39,110-300,42.8-5.83,72.52,121.44,128,119,71.3-3.14,94.69-216.51,160-217,49.9-.37,61.94,123.99,123,129,71.72,5.88,108.83-196.17,219-208,15.87-1.7,65.93,.62,100,0"
                    />
        </motion.svg>
    )
}