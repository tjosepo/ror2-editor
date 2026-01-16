import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState, useEffect } from "react";
import { DLC, DLC_NAMES } from "../data/types";
import { createPortal } from "react-dom";
import "./logbook.scss";

interface BulkDLCPromptModalProps {
    isOpen: boolean;
    onConfirm: (ownership: Record<DLC, boolean>) => void;
    onCancel: () => void;
    existingOwnership: Record<string, boolean>;
}

const CHECKABLE_DLCS: DLC[] = ["sotv", "sots", "ac"];

export function BulkDLCPromptModal({
    isOpen,
    onConfirm,
    onCancel,
    existingOwnership,
}: BulkDLCPromptModalProps) {
    const [ownership, setOwnership] = useState<Record<string, boolean>>({
        ...existingOwnership,
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggle = (dlc: DLC) => {
        setOwnership((prev) => ({
            ...prev,
            [dlc]: !prev[dlc],
        }));
    };

    if (!mounted || typeof document === "undefined") return null;

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
                        onClick={onCancel}
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
                        <div className="bg-ror-bg-main/50 p-4 border-b border-ror-border" style={{ padding: "1rem", backgroundColor: "rgba(12, 14, 18, 0.5)", borderBottom: "1px solid #2f3440" }}>
                            <h3 className="text-ror-text-main font-display uppercase tracking-wider text-sm" style={{ margin: 0 }}>
                                Unlock All - DLC Configuration
                            </h3>
                        </div>

                        <div className="p-6 flex flex-col gap-4" style={{ padding: "1.5rem" }}>
                            <p className="text-ror-text-dim text-sm">
                                Please confirm which DLCs you own so we can unlock the correct achievements.
                            </p>

                            <div className="flex flex-col gap-2">
                                {CHECKABLE_DLCS.map((dlc) => (
                                    <button
                                        key={dlc}
                                        type="button"
                                        onClick={() => toggle(dlc)}
                                        className="flex items-center gap-3 p-3 transition-all"
                                        style={{
                                            width: "100%",
                                            border: "1px solid",
                                            borderColor: ownership[dlc] ? "rgba(149, 197, 70, 0.5)" : "rgba(47, 52, 64, 0.3)",
                                            backgroundColor: ownership[dlc] ? "#0c0e12" : "transparent",
                                            cursor: "pointer",
                                            textAlign: "left"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "1.25rem", height: "1.25rem",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                borderRadius: "0.25rem", border: "1px solid",
                                                borderColor: ownership[dlc] ? "#95c546" : "#8f95a0",
                                                backgroundColor: ownership[dlc] ? "#95c546" : "transparent",
                                                color: ownership[dlc] ? "#0c0e12" : "transparent"
                                            }}
                                        >
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span
                                            className="text-sm uppercase tracking-wider"
                                            style={{ color: ownership[dlc] ? "#eff2f5" : "#8f95a0" }}
                                        >
                                            {DLC_NAMES[dlc]}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 flex gap-3 justify-end bg-ror-bg-main" style={{ padding: "1rem", borderTop: "1px solid #2f3440", backgroundColor: "rgba(12, 14, 18, 0.3)" }}>
                            <button
                                type="button"
                                onClick={onCancel}
                                className="ror-button text-ror-text-muted hover:text-ror-text-main uppercase tracking-wider text-xs"
                                style={{ padding: "0.5rem 1rem", backgroundColor: "transparent", border: "1px solid #2f3440" }}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => onConfirm(ownership as Record<DLC, boolean>)}
                                className="ror-button text-ror-bg-main bg-ror-uncommon border-ror-uncommon uppercase tracking-wider text-xs font-bold"
                                style={{ padding: "0.5rem 1.5rem" }}
                            >
                                Confirm & Unlock
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
