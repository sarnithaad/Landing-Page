<AnimatePresence initial={false}>
  {openCard === card.id && (
    <motion.p
      {...({
        id: `desc-${card.id}`,
        className: "text-[#222222] text-sm md:text-base leading-relaxed font-inter overflow-hidden"
      } as { id: string; className: string })}
      key="content"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {card.description}
    </motion.p>
  )}
</AnimatePresence>
