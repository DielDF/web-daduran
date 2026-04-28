export default function GrainOverlay(){
    return (
        <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-soft-light">
            <div className="h-full w-full bg-[radial-gradient(circle,_rgba(255,255,255,0.18)_1px,_transparent_1px)] bg-[length:4px_4px]"/>
        </div>
    )
}