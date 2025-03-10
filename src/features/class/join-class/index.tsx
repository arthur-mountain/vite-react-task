import type { MouseEventHandler } from "react";
import { styled, useTheme } from "styled-components";
import { ChevronLeft, Files } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button, ButtonProps, Text } from "@/components";
import { writeTextToClipboard } from "@/utils";
import { useSelector } from "@/stores";
import { Container } from "../shared";

type JoinClassProps = {
  title: string;
};

const JoinClassContainer = styled.div`
  padding: 0 ${({ theme }) => theme.spacing["3xl"]}
    ${({ theme }) => theme.spacing["3xl"]};
`;

const CopyIcon = styled(Files)`
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
`;

const QrCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${({ theme }) => theme.gap.lg};
  padding-left: ${({ theme }) => theme.spacing["sm"]};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const QrCodeInfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.gap["3xl"]};
`;

const QrCodeInfText = styled(Text)`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.gap.base};
`;

const QRCode = styled(QRCodeSVG)`
  padding: ${({ theme }) => theme.spacing["xl"]};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const JoinClass = ({ title }: JoinClassProps) => {
  const theme = useTheme();
  const classInfo = useSelector((state) => state.class.classInfo);
  const { id, qrcode, qrcodeVersion } = classInfo;

  const onCopy: (text: string) => MouseEventHandler<SVGSVGElement> =
    (text) => (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      writeTextToClipboard(text);
    };

  const onBack: ButtonProps["onClick"] = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    {
      /* TODO: [Confirm] {feature}:
      If the QR Code modal and the Student List are displayed simultaneously,
      the behavior of this button when clicked is unclear.
    */
    }
    console.log("Back to Class List");
  };

  return (
    <Container>
      <JoinClassContainer>
        <Button $variant="text" onClick={onBack}>
          <ChevronLeft size={16} />
          Back to Class List
        </Button>

        <QrCodeContainer>
          <Text $weight="extrabold" $align="left">
            Join {title}
          </Text>
          {(id || qrcode) && (
            <QrCodeInfoContainer>
              {id && (
                <QrCodeInfText $weight="bold">
                  ID: {id}
                  <CopyIcon
                    size={20}
                    color={theme.color.white}
                    onClick={onCopy(id)}
                  />
                </QrCodeInfText>
              )}
              {qrcode && (
                <QrCodeInfText $weight="bold">
                  Link
                  <CopyIcon
                    size={20}
                    color={theme.color.white}
                    onClick={onCopy(qrcode)}
                  />
                </QrCodeInfText>
              )}
            </QrCodeInfoContainer>
          )}
          {qrcode && <QRCode value={qrcode} size={250} />}
        </QrCodeContainer>
      </JoinClassContainer>
    </Container>
  );
};

export { JoinClass, type JoinClassProps };
