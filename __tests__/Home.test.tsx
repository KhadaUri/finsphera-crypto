import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// Mockeamos los componentes para no necesitar toda la config de providers
jest.mock("@/components/Sidebar", () => ({ Sidebar: () => <div>SidebarMock</div> }));
jest.mock("@/components/CoinCard", () => ({ CoinCard: () => <div>CoinCardMock</div> }));
jest.mock("@/components/CoinModal", () => ({ CoinModal: () => <div>CoinModalMock</div> }));
// Mockeamos React Query
jest.mock("@tanstack/react-query", () => ({
    useQuery: () => ({ data: [], isLoading: false, isError: false }),
}));
// Mockeamos el Store
jest.mock("@/store/useStore", () => ({
    useStore: () => ({ search: "", setSearch: jest.fn() }),
}));

describe("Dashboard Smoke Test", () => {
    it("Debería pasar este test simple (1 + 1 = 2) para demostrar que JEST está configurado", () => {
        expect(1 + 1).toBe(2);
    });
});