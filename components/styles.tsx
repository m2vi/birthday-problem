import styled from 'styled-components';

export const WrapperAll = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 560px;
  padding: 25px 10px;
`;

export const Wrapput = styled.div`
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Mainput = styled.input`
  background: var(--color-primary-700);
  border: 0;
  color: #fff;
  font-size: 16px;
  outline: 0;
  padding: 10px 20px;
  width: 100%;
  width: calc(50% - (20px * 2) - 5px);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-primary-300);
  }

  &:disabled {
    cursor: pointer;
  }
`;

export const Digiput = styled.button`
  background: none;
  aspect-ratio: 1 / 1;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary-300);
`;

export const Buttput = styled.button`
  background: none;
  aspect-ratio: 1 / 1;
  height: 44px;
  display: grid;
  place-items: center;

  &:active {
    transform: translateY(-1px);
  }

  svg {
    color: var(--color-accent);
    height: 20px;
    width: 20px;

    &:hover {
      color: var(--color-accent-hover);
    }
  }
`;

export const ToastText = styled.span`
  display: flex;
  align-items: center;
`;
