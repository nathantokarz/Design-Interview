import styled from "@mui/system/styled";
import React from "react";
type DashboardLayoutProps = {
    children?: React.ReactNode;
};

const Container = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    width: "1300px",
    justifyContent: "center",
}))

export default function DashboardLayout({ children }: DashboardLayoutProps) {

    return (
        <Container style={{ width: "100%" }}>
            <Container style={{ width: "100%" }}>
                <Container style={{ width: "100%" }}>{children}</Container>
            </Container>
        </Container>
    );
}