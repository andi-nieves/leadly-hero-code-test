import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
    return (
        <div className="w-full lg:max-w-[1136px] self-center z-2 px-5">
            {children}
        </div>
    );
}
