import {Upload} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {UploadButton} from "@/components/ui/UploadButton";

export const Dashboard = () => {
    return (
        <main className="mx-auto max-w-7xl md:p-10">
            <div className="mt-8 pb-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200 sm:gap-0">
                <h4 className="mb-3 font-bold text-5xl text-gray-900">My files</h4>
                <UploadButton/>
            </div>
        </main>
    );
};