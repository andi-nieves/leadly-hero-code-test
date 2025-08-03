import UserIcon from "@/assets/icons/User"

export default function LoginButton() {
    return (
        <button className="w-[107px] border border-[#253451] rounded-[19px] text-(--text-secondary) flex flex-row items-center justify-center py-[8px] gap-2">
            <UserIcon />
            <span className="mt-[3px] leading-none">Login</span>
        </button>
    );
}
