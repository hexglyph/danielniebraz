import { EyeIcon, MinusIcon, PlusIcon, ResetIcon } from "./Icons";

export default function Accessibility() {
    return (
        <div className={`flex w-full justify-end text-white`}>
            <span className={`mr-4`}>Accessibility</span>
            {PlusIcon}
            {MinusIcon}
            {ResetIcon}
            {EyeIcon}
        </div>
    )
}