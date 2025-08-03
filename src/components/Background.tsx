import Plane from "@/assets/images/Plane";

export default function Background() {
    return <div className="container-bg relative hidden md:flex">
        <div className="left z-1 hidden md:flex" />
        <div className="right z-1 hidden md:flex" />
        <Plane className="absolute bottom-15 -left-15 hidden md:flex" />
        <Plane className="absolute bottom-70 -right-25 hidden md:flex" />
        <Plane className="absolute bottom-15 right-0 hidden md:flex" />
    </div>
}
