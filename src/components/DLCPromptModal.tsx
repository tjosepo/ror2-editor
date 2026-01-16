import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Check, X } from "lucide-react";
import { DLC, DLC_NAMES } from "../data/types";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import "./logbook.scss";

interface DLCPromptModalProps {
    isOpen: boolean;
    dlc: DLC | null;
    onConfirm: () => void;
    onDeny: () => void;
}

export function DLCPromptModal({
    isOpen,
    dlc,
    onConfirm,
    onDeny,
}: DLCPromptModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || typeof document === "undefined") return null;
    if (!dlc) return null;

    const dlcName = DLC_NAMES[dlc];

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 2147483647,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "1rem"
                    }}
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onDeny}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            backdropFilter: "blur(4px)",
                            zIndex: -1
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        className="ror-card"
                        style={{
                            width: "100%",
                            maxWidth: "28rem",
                            backgroundColor: "#1e2129",
                            border: "1px solid #2f3440",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                            overflow: "hidden"
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 p-4 border-b border-ror-border bg-ror-bg-main" style={{ backgroundColor: "rgba(12, 14, 18, 0.5)" }}>
                            <div style={{
                                width: "2rem", height: "2rem", borderRadius: "0.25rem",
                                backgroundColor: "rgba(234, 179, 8, 0.1)",
                                border: "1px solid rgba(234, 179, 8, 0.2)",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <AlertTriangle size={16} color="#eab308" />
                            </div>
                            <div>
                                <h3 className="text-ror-text-main uppercase tracking-wider text-sm" style={{ margin: 0 }}>
                                    DLC Required
                                </h3>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col gap-4">
                            <p className="text-ror-text-dim text-sm" style={{ lineHeight: 1.6 }}>
                                You are unlocking content from <span className="text-ror-text-main font-bold">{dlcName}</span>.
                            </p>
                            <p className="text-ror-text-dim text-sm" style={{ lineHeight: 1.6 }}>
                                To ensure your save file works correctly, we need to know if you own this DLC.
                                If you do, we will also unlock the corresponding achievements.
                            </p>

                            <div className="p-3 bg-ror-bg-main border border-ror-border text-xs text-ror-text-muted" style={{ fontStyle: "italic", border: "1px solid rgba(47, 52, 64, 0.5)" }}>
                                Note: We will remember your choice for this session.
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-4 flex gap-3 justify-end bg-ror-bg-main" style={{ borderTop: "1px solid #2f3440", backgroundColor: "rgba(12, 14, 18, 0.3)" }}>
                            <button
                                type="button"
                                onClick={onDeny}
                                className="ror-button text-ror-text-muted hover:text-ror-text-main uppercase tracking-wider text-xs flex items-center gap-2"
                                style={{ padding: "0.5rem 1rem", backgroundColor: "transparent", border: "1px solid #2f3440" }}
                            >
                                <X size={14} />
                                No, I don't
                            </button>
                            <button
                                type="button"
                                onClick={onConfirm}
                                className="ror-button text-ror-uncommon hover:text-ror-bg-main uppercase tracking-wider text-xs font-bold flex items-center gap-2"
                                style={{ padding: "0.5rem 1rem", backgroundColor: "rgba(149, 197, 70, 0.1)", border: "1px solid #95c546" }}
                            >
                                <Check size={14} />
                                Yes, I Own It
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
