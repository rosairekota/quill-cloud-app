'use client'
import {buttonVariants} from "@/components/ui/button";
import {Upload} from "lucide-react";
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export const UploadButton = () => {
    const [isOpen, setIsOpen]= useState<boolean>(false)

    const handleOpenDialog =()=>{ setIsOpen(!isOpen)}
    return (
        <>
            <UploadModal isOpen={isOpen} handleOpen={handleOpenDialog}/>
        </>
    );
};

export  const UploadModal = ({isOpen, handleOpen}:any) => {
    return (
        <Dialog open={isOpen} onOpenChange={handleOpen}>
            <DialogTrigger onClick={()=>handleOpen(true)} asChild>
                <button  className={buttonVariants({
                    className:'cursor-pointer',
                    size: 'sm'
                })} >Upload <Upload className="h-5 h-5"/></button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                       kk {JSON.stringify(isOpen)}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

   )
}