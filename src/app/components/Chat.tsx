import { useUser } from "@/app/contexts/Usercontext";
import { NameInput } from "./NameInput";

export const Chat = () => {

    const userCtx = useUser();

    if (!userCtx) return null;
    if (!userCtx.user) return <NameInput/>;

    return (
        <div className="border border-white/30 rounded-md text-3xl">
            ...
        </div>
    );
}
