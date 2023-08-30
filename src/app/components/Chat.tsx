import { useUser } from "@/app/contexts/Usercontext";

export const Chat = () => {

    const userCtx = useUser();

    return (
        <div className="border border-white/30 rounded-md text-3xl">
            ...
        </div>
    );
}
