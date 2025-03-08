import type { MouseEventHandler } from "react";
import { styled, useTheme } from "styled-components";
import { ChevronLeft, Files } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { Button, type ButtonProps, Text } from "@/components";
import { writeTextToClipboard } from "@/utils";
import { useSelector } from "@/stores";
type JoinClassProps = {
  title: string;
  back: ButtonProps["onClick"];
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

const JoinClass = ({ title, back }: JoinClassProps) => {
  const theme = useTheme();
  const classInfo = useSelector((state) => state.class.classInfo);
  const { id, qrcode } = classInfo;

  const onCopy: (text: string) => MouseEventHandler<SVGSVGElement> =
    (text) => (evt) => {
      evt.preventDefault();
      evt.stopPropagation();
      writeTextToClipboard(text);
    };

  return (
    <JoinClassContainer>
      <Button $variant="text" onClick={back}>
        <ChevronLeft size={16} />
        {/* TODO: [Confirm] {wording}:
          Should be "Back to Student List" when already in a specific class (e.g., 302 Science)?
        */}
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
        {qrcode && <QRCode value={qrcode} size={325} />}
      </QrCodeContainer>
    </JoinClassContainer>
  );
};

export { JoinClass, type JoinClassProps };
