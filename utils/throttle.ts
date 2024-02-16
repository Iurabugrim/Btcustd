export const throttle = <T>(callback: (data: T) => void, delay: number) => {
    let lastTime = 0;
    let timeout: ReturnType<typeof setTimeout>;
    return (data: T) => {
        const now = new Date().getTime();
        const callCallback = () => {
            lastTime = now;
            callback(data);
        };

        if (now - lastTime < delay) {
            clearTimeout(timeout);
            timeout = setTimeout(callCallback, delay - (now - lastTime));
        } else {
            callCallback();
        }
    };
};