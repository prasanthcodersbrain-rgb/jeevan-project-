import React from "react";

const WAITLISTFORM_MARKUP = `<div class="waitlist-form"><div class="waitlist-form__content-wrapper"><div class="waitlist-form__content"><div class="waitlist-form__form-wrapper"><button class="waitlist-form__button"><div class="waitlist-form__button-line-1"></div><div class="waitlist-form__button-line-2"></div></button><div class="waitlist-form__form" id="lightbox-inline-form-89e0319c-4b6a-42d4-a4a3-6503a0be4b3e"><div aria-label="Inline Form" id="lightbox-89e0319c-4b6a-42d4-a4a3-6503a0be4b3e-1774261724449" role="dialog" style="position: relative; width: 460px; height: 630px; border-style: none; border-width: 0px; overflow: visible;"><iframe aria-label="Modal Overlay Box Frame" class="box-321863" frameborder="0" height="100%" id="lightbox-iframe-89e0319c-4b6a-42d4-a4a3-6503a0be4b3e" sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-top-navigation" scrolling="no" src="about:blank" style="display:block;position:absolute;margin:0;padding:0;border:none;width:100%;height:100%;" tabindex="1" title="Luffu Waitlist Sign Up" width="100%"></iframe></div></div></div></div></div></div>`;

export default function WaitlistForm() {
  return <div dangerouslySetInnerHTML={{ __html: WAITLISTFORM_MARKUP }} />;
}
