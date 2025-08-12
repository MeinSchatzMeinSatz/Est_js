function useGreetingTime() {
    const hour = new Date().getHours();
    // setTime이 없으니까 바로 리턴
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
}

export default useGreetingTime;
