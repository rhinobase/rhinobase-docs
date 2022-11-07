import {
  Button,
  Kbd,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Spacer,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

export default function Searchbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        leftIcon={<span className="material-symbols-rounded">search</span>}
        w="xl"
        fontWeight={500}
      >
        Search the docs
        <Spacer />
        <span style={{ display: "flex" }}>
          <Kbd mr={1}>Ctrl</Kbd> + <Kbd ml={1}>K</Kbd>
        </span>
      </Button>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>
            <InputGroup size="lg">
              <InputLeftElement pointerEvents="none">
                <span className="material-symbols-rounded">search</span>
              </InputLeftElement>
              <Input placeholder="Search the docs" />
            </InputGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
