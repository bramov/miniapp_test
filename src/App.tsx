import React from 'react';
import {TonConnectButton, TonConnectUIProvider} from '@tonconnect/ui-react';

import { AppRoot, List } from '@telegram-apps/telegram-ui';
// import { CellSection } from './components/CellSection';
// import { FormSection } from './components/FormSection/FormSection';
// import { BannerSection } from './components/BannerSection';
import { TimelineSection } from './components/TimelineSection/TimelineSection';
// import { TooltipSection } from './components/TooltipSection/TooltipSection';
// import { ModalSection } from './components/ModalSection/ModalSection';

export const App = () => (
  <TonConnectUIProvider manifestUrl="https://bramov.github.io/miniapp_test/tonconnect-manifest.json">
    <AppRoot>
      <List className="position">
        <TonConnectButton />
        <TimelineSection />
      </List>
    </AppRoot>
  </TonConnectUIProvider>
);
