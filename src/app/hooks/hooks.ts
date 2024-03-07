import { useState, useCallback } from 'react';

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen((open) => !open), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, open, close };
};
