(() => {
  "use strict";

  const scene = document.querySelector("#scene");
  const card = document.querySelector("#cv-card");
  const stage = document.querySelector("#cv");
  const closeButton = document.querySelector("#focus-close");
  const floatingCard = document.querySelector(".cv-float");
  const introduction = document.querySelector(".introduction");
  const interactionHint = document.querySelector("#interaction-hint");
  const interactionHintClose = document.querySelector(
    "#interaction-hint-close",
  );
  const locationTrigger = document.querySelector("#cv-location-trigger");
  const locationPanel = document.querySelector("#location-panel");
  const locationPanelClose = document.querySelector("#location-panel-close");
  const travelPlane = document.querySelector("#travel-plane");
  const emailTrigger = document.querySelector("#cv-email-trigger");
  const copyToast = document.querySelector("#copy-toast");
  const copyToastMessage = document.querySelector("#copy-toast-message");
  const phoneTrigger = document.querySelector("#cv-phone-trigger");
  const contactPanel = document.querySelector("#contact-panel");
  const contactPanelClose = document.querySelector("#contact-panel-close");
  const contactSignal = document.querySelector("#contact-signal");
  const linkedinLink = document.querySelector("#cv-linkedin-link");
  const polytechniqueTrigger = document.querySelector(
    "#cv-polytechnique-trigger",
  );
  const polytechniquePanel = document.querySelector("#polytechnique-panel");
  const polytechniquePanelClose = document.querySelector(
    "#polytechnique-panel-close",
  );
  const academicSignal = document.querySelector("#academic-signal");
  const eceTrigger = document.querySelector("#cv-ece-trigger");
  const ecePanel = document.querySelector("#ece-panel");
  const ecePanelClose = document.querySelector("#ece-panel-close");
  const eceSignal = document.querySelector("#ece-signal");
  const lyceeTrigger = document.querySelector("#cv-lycee-trigger");
  const lyceePanel = document.querySelector("#lycee-panel");
  const lyceePanelClose = document.querySelector("#lycee-panel-close");
  const lyceeSignal = document.querySelector("#lycee-signal");
  const afevTrigger = document.querySelector("#cv-afev-trigger");
  const afevPanel = document.querySelector("#afev-panel");
  const afevPanelClose = document.querySelector("#afev-panel-close");
  const mentorshipSignal = document.querySelector("#mentorship-signal");
  const gqeberhaTrigger = document.querySelector("#cv-gqeberha-trigger");
  const gqeberhaHitArea = document.querySelector("#cv-gqeberha-hit-area");
  const gqeberhaPanel = document.querySelector("#gqeberha-panel");
  const gqeberhaPanelClose = document.querySelector("#gqeberha-panel-close");
  const gqeberhaSignal = document.querySelector("#gqeberha-signal");
  const ikeaTrigger = document.querySelector("#cv-ikea-trigger");
  const ikeaPanel = document.querySelector("#ikea-panel");
  const ikeaPanelClose = document.querySelector("#ikea-panel-close");
  const ikeaSignal = document.querySelector("#ikea-signal");
  const continentalTrigger = document.querySelector("#cv-continental-trigger");
  const continentalPanel = document.querySelector("#continental-panel");
  const continentalPanelClose = document.querySelector(
    "#continental-panel-close",
  );
  const continentalSignal = document.querySelector("#continental-signal");
  const dncaTrigger = document.querySelector("#cv-dnca-trigger");
  const dncaPanel = document.querySelector("#dnca-panel");
  const dncaPanelClose = document.querySelector("#dnca-panel-close");
  const dncaSignal = document.querySelector("#dnca-signal");
  const beyondSection = document.querySelector("#au-dela");
  const beyondCards = [...document.querySelectorAll(".beyond-card")];
  const neuralCanvas = document.querySelector("[data-neural-network]");

  if (
    !scene ||
    !card ||
    !stage ||
    !closeButton ||
    !floatingCard ||
    !introduction ||
    !interactionHint ||
    !interactionHintClose ||
    !locationTrigger ||
    !locationPanel ||
    !locationPanelClose ||
    !travelPlane ||
    !emailTrigger ||
    !copyToast ||
    !copyToastMessage ||
    !phoneTrigger ||
    !contactPanel ||
    !contactPanelClose ||
    !contactSignal ||
    !linkedinLink ||
    !polytechniqueTrigger ||
    !polytechniquePanel ||
    !polytechniquePanelClose ||
    !academicSignal ||
    !eceTrigger ||
    !ecePanel ||
    !ecePanelClose ||
    !eceSignal ||
    !lyceePanel ||
    !lyceePanelClose ||
    !lyceeSignal ||
    !afevTrigger ||
    !afevPanel ||
    !afevPanelClose ||
    !mentorshipSignal ||
    !gqeberhaTrigger ||
    !gqeberhaHitArea ||
    !gqeberhaPanel ||
    !gqeberhaPanelClose ||
    !gqeberhaSignal ||
    !ikeaTrigger ||
    !ikeaPanel ||
    !ikeaPanelClose ||
    !ikeaSignal ||
    !continentalTrigger ||
    !continentalPanel ||
    !continentalPanelClose ||
    !continentalSignal ||
    !dncaTrigger ||
    !dncaPanel ||
    !dncaPanelClose ||
    !dncaSignal
  ) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let isDetailOpen = false;
  let detailAnimation = null;
  let interactionHintTimer = 0;
  let interactionHintAutoHideTimer = 0;
  let hasShownInteractionHint = false;
  let isLocationPanelOpen = false;
  let locationFlightAnimation = null;
  let locationLaunchTimer = 0;
  let copyToastTimer = 0;
  let isContactPanelOpen = false;
  let contactSignalAnimation = null;
  let contactLaunchTimer = 0;
  let isPolytechniquePanelOpen = false;
  let academicSignalAnimation = null;
  let polytechniqueLaunchTimer = 0;
  let isEcePanelOpen = false;
  let eceSignalAnimation = null;
  let eceLaunchTimer = 0;
  let isLyceePanelOpen = false;
  let lyceeSignalAnimation = null;
  let lyceeLaunchTimer = 0;
  let isAfevPanelOpen = false;
  let mentorshipSignalAnimation = null;
  let afevLaunchTimer = 0;
  let isGqeberhaPanelOpen = false;
  let gqeberhaSignalAnimation = null;
  let gqeberhaLaunchTimer = 0;
  let isIkeaPanelOpen = false;
  let ikeaSignalAnimation = null;
  let ikeaLaunchTimer = 0;
  let isContinentalPanelOpen = false;
  let continentalSignalAnimation = null;
  let continentalLaunchTimer = 0;
  let isDncaPanelOpen = false;
  let dncaSignalAnimation = null;
  let dncaLaunchTimer = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let animationFrame = 0;
  let neuralAnimationFrame = 0;

  const clamp = (value, minimum, maximum) =>
    Math.min(Math.max(value, minimum), maximum);

  const getBeyondModal = (cardElement) => {
    const trigger = cardElement.querySelector(".beyond-card__trigger");
    const modalId = trigger?.getAttribute("aria-controls");
    const modal = modalId ? document.getElementById(modalId) : null;

    return { trigger, modal };
  };

  const syncBeyondModalLock = () => {
    const hasOpenModal = beyondCards.some((cardElement) => {
      const { modal } = getBeyondModal(cardElement);
      return modal instanceof HTMLDialogElement && modal.open;
    });

    document.body.classList.toggle("beyond-modal-open", hasOpenModal);
  };

  const setBeyondCardState = (cardElement, expanded) => {
    const { trigger, modal } = getBeyondModal(cardElement);

    if (!trigger || !(modal instanceof HTMLDialogElement)) {
      return;
    }

    cardElement.classList.toggle("is-expanded", expanded);
    trigger.setAttribute("aria-expanded", String(expanded));

    if (expanded && !modal.open) {
      modal.showModal();
    } else if (!expanded && modal.open) {
      modal.close();
    }

    syncBeyondModalLock();
  };

  const neuralNodes = [
    [0.5, 0.52],
    [0.3, 0.3],
    [0.27, 0.7],
    [0.7, 0.28],
    [0.73, 0.68],
    [0.11, 0.18],
    [0.1, 0.82],
    [0.9, 0.15],
    [0.91, 0.82],
  ];
  const neuralEdges = [
    [5, 1],
    [1, 0],
    [6, 2],
    [2, 0],
    [0, 3],
    [3, 7],
    [0, 4],
    [4, 8],
    [1, 2],
    [3, 4],
  ];
  const neuralRoutes = [
    [5, 1, 0, 3, 7],
    [6, 2, 0, 4, 8],
    [7, 3, 0, 2, 6],
  ];

  const drawNeuralNetwork = (timestamp = 0) => {
    if (!neuralCanvas) {
      return;
    }

    const context = neuralCanvas.getContext("2d");
    const bounds = neuralCanvas.getBoundingClientRect();

    if (!context || bounds.width < 2 || bounds.height < 2) {
      return;
    }

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const canvasWidth = Math.round(bounds.width * pixelRatio);
    const canvasHeight = Math.round(bounds.height * pixelRatio);

    if (
      neuralCanvas.width !== canvasWidth ||
      neuralCanvas.height !== canvasHeight
    ) {
      neuralCanvas.width = canvasWidth;
      neuralCanvas.height = canvasHeight;
    }

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const paddingX = Math.min(24, bounds.width * 0.08);
    const paddingY = Math.min(22, bounds.height * 0.14);
    const points = neuralNodes.map(([x, y]) => ({
      x: paddingX + x * (bounds.width - paddingX * 2),
      y: paddingY + y * (bounds.height - paddingY * 2),
    }));

    context.lineWidth = 1;
    context.strokeStyle = "rgba(183, 215, 176, 0.3)";
    neuralEdges.forEach(([fromIndex, toIndex]) => {
      const from = points[fromIndex];
      const to = points[toIndex];
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.stroke();
    });

    const drawPulse = (route, progress, color) => {
      const segments = route.slice(1).map((nodeIndex, index) => {
        const from = points[route[index]];
        const to = points[nodeIndex];
        return {
          from,
          to,
          length: Math.hypot(to.x - from.x, to.y - from.y),
        };
      });
      const totalLength = segments.reduce(
        (total, segment) => total + segment.length,
        0,
      );
      let distance = progress * totalLength;
      let activeSegment = segments[segments.length - 1];

      for (const segment of segments) {
        if (distance <= segment.length) {
          activeSegment = segment;
          break;
        }
        distance -= segment.length;
      }

      const segmentProgress = clamp(
        distance / Math.max(activeSegment.length, 1),
        0,
        1,
      );
      const x =
        activeSegment.from.x +
        (activeSegment.to.x - activeSegment.from.x) * segmentProgress;
      const y =
        activeSegment.from.y +
        (activeSegment.to.y - activeSegment.from.y) * segmentProgress;

      context.save();
      context.fillStyle = color;
      context.shadowColor = color;
      context.shadowBlur = 14;
      context.beginPath();
      context.arc(x, y, 3.1, 0, Math.PI * 2);
      context.fill();
      context.restore();
    };

    neuralRoutes.forEach((route, index) => {
      const progress = reducedMotion.matches
        ? (0.2 + index * 0.27) % 1
        : (timestamp / 4200 + index * 0.31) % 1;
      drawPulse(route, progress, "rgba(214, 239, 205, 0.96)");
    });

    points.forEach((point, index) => {
      context.save();
      context.fillStyle = index === 0 ? "#d6e9d0" : "#9fc59f";
      context.shadowColor = "rgba(185, 222, 179, 0.48)";
      context.shadowBlur = index === 0 ? 13 : 8;
      context.beginPath();
      context.arc(point.x, point.y, index === 0 ? 4.4 : 3.1, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  const syncNeuralAnimation = () => {
    window.cancelAnimationFrame(neuralAnimationFrame);
    neuralAnimationFrame = 0;

    if (!neuralCanvas) {
      return;
    }

    if (reducedMotion.matches) {
      drawNeuralNetwork(0);
      return;
    }

    const animate = (timestamp) => {
      drawNeuralNetwork(timestamp);
      neuralAnimationFrame = window.requestAnimationFrame(animate);
    };

    neuralAnimationFrame = window.requestAnimationFrame(animate);
  };

  const copyTextFallback = (value) => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    textArea.style.pointerEvents = "none";
    document.body.append(textArea);
    textArea.select();
    const copied = document.execCommand("copy");
    textArea.remove();

    if (!copied) {
      throw new Error("La copie dans le presse-papiers a échoué.");
    }
  };

  const showCopyToast = (copied) => {
    window.clearTimeout(copyToastTimer);
    copyToastMessage.textContent = copied
      ? "Adresse e-mail copiée"
      : "Copie impossible";
    copyToast.classList.toggle("is-error", !copied);
    copyToast.classList.remove("is-visible");
    copyToast.setAttribute("aria-hidden", "false");

    window.requestAnimationFrame(() => {
      copyToast.classList.add("is-visible");
    });

    copyToastTimer = window.setTimeout(() => {
      copyToast.classList.remove("is-visible");
      copyToast.setAttribute("aria-hidden", "true");
      copyToastTimer = 0;
    }, 2300);
  };

  const copyEmailAddress = async () => {
    const email = emailTrigger.dataset.email?.trim();

    if (!email) {
      showCopyToast(false);
      return;
    }

    let copied = false;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch {
        // Le fallback ci-dessous couvre les navigateurs ou permissions limités.
      }
    }

    if (!copied) {
      try {
        copyTextFallback(email);
        copied = true;
      } catch {
        copied = false;
      }
    }

    showCopyToast(copied);
  };

  const hideInteractionHint = () => {
    window.clearTimeout(interactionHintTimer);
    window.clearTimeout(interactionHintAutoHideTimer);
    interactionHintTimer = 0;
    interactionHintAutoHideTimer = 0;
    interactionHint.classList.remove("is-visible");
    interactionHint.setAttribute("aria-hidden", "true");
  };

  const scheduleInteractionHint = () => {
    if (hasShownInteractionHint) {
      return;
    }

    window.clearTimeout(interactionHintTimer);
    interactionHintTimer = window.setTimeout(
      () => {
        interactionHintTimer = 0;

        if (!isDetailOpen || hasShownInteractionHint) {
          return;
        }

        hasShownInteractionHint = true;
        interactionHint.classList.add("is-visible");
        interactionHint.setAttribute("aria-hidden", "false");
        interactionHintAutoHideTimer = window.setTimeout(
          hideInteractionHint,
          7000,
        );
      },
      reducedMotion.matches ? 80 : 780,
    );
  };

  const closeContactPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(contactLaunchTimer);
    contactLaunchTimer = 0;
    isContactPanelOpen = false;

    if (contactSignalAnimation) {
      contactSignalAnimation.cancel();
      contactSignalAnimation = null;
    }

    scene.classList.remove("is-contact-opening", "is-contact-open");
    phoneTrigger.setAttribute("aria-expanded", "false");
    contactPanel.setAttribute("aria-hidden", "true");
    contactSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      phoneTrigger.focus({ preventScroll: true });
    }
  };

  const closeLocationPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(locationLaunchTimer);
    locationLaunchTimer = 0;
    isLocationPanelOpen = false;

    if (locationFlightAnimation) {
      locationFlightAnimation.cancel();
      locationFlightAnimation = null;
    }

    scene.classList.remove("is-location-opening", "is-location-open");
    locationTrigger.setAttribute("aria-expanded", "false");
    locationPanel.setAttribute("aria-hidden", "true");
    travelPlane.classList.remove("is-flying");

    if (restoreFocus && isDetailOpen) {
      locationTrigger.focus({ preventScroll: true });
    }
  };

  const closePolytechniquePanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(polytechniqueLaunchTimer);
    polytechniqueLaunchTimer = 0;
    isPolytechniquePanelOpen = false;

    if (academicSignalAnimation) {
      academicSignalAnimation.cancel();
      academicSignalAnimation = null;
    }

    scene.classList.remove(
      "is-polytechnique-opening",
      "is-polytechnique-open",
    );
    polytechniqueTrigger.setAttribute("aria-expanded", "false");
    polytechniquePanel.setAttribute("aria-hidden", "true");
    academicSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      polytechniqueTrigger.focus({ preventScroll: true });
    }
  };

  const closeEcePanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(eceLaunchTimer);
    eceLaunchTimer = 0;
    isEcePanelOpen = false;

    if (eceSignalAnimation) {
      eceSignalAnimation.cancel();
      eceSignalAnimation = null;
    }

    scene.classList.remove("is-ece-opening", "is-ece-open");
    eceTrigger.setAttribute("aria-expanded", "false");
    ecePanel.setAttribute("aria-hidden", "true");
    eceSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      eceTrigger.focus({ preventScroll: true });
    }
  };

  const closeLyceePanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(lyceeLaunchTimer);
    lyceeLaunchTimer = 0;
    isLyceePanelOpen = false;

    if (lyceeSignalAnimation) {
      lyceeSignalAnimation.cancel();
      lyceeSignalAnimation = null;
    }

    scene.classList.remove("is-lycee-opening", "is-lycee-open");
    lyceeTrigger?.setAttribute("aria-expanded", "false");
    lyceePanel.setAttribute("aria-hidden", "true");
    lyceeSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      lyceeTrigger?.focus({ preventScroll: true });
    }
  };

  const closeAfevPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(afevLaunchTimer);
    afevLaunchTimer = 0;
    isAfevPanelOpen = false;

    if (mentorshipSignalAnimation) {
      mentorshipSignalAnimation.cancel();
      mentorshipSignalAnimation = null;
    }

    scene.classList.remove("is-afev-opening", "is-afev-open");
    afevTrigger.setAttribute("aria-expanded", "false");
    afevPanel.setAttribute("aria-hidden", "true");
    mentorshipSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      afevTrigger.focus({ preventScroll: true });
    }
  };

  const closeGqeberhaPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(gqeberhaLaunchTimer);
    gqeberhaLaunchTimer = 0;
    isGqeberhaPanelOpen = false;

    if (gqeberhaSignalAnimation) {
      gqeberhaSignalAnimation.cancel();
      gqeberhaSignalAnimation = null;
    }

    scene.classList.remove("is-gqeberha-opening", "is-gqeberha-open");
    gqeberhaTrigger.setAttribute("aria-expanded", "false");
    gqeberhaPanel.setAttribute("aria-hidden", "true");
    gqeberhaSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      gqeberhaTrigger.focus({ preventScroll: true });
    }
  };

  const closeIkeaPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(ikeaLaunchTimer);
    ikeaLaunchTimer = 0;
    isIkeaPanelOpen = false;

    if (ikeaSignalAnimation) {
      ikeaSignalAnimation.cancel();
      ikeaSignalAnimation = null;
    }

    scene.classList.remove("is-ikea-opening", "is-ikea-open");
    ikeaTrigger.setAttribute("aria-expanded", "false");
    ikeaPanel.setAttribute("aria-hidden", "true");
    ikeaSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      ikeaTrigger.focus({ preventScroll: true });
    }
  };

  const closeContinentalPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(continentalLaunchTimer);
    continentalLaunchTimer = 0;
    isContinentalPanelOpen = false;

    if (continentalSignalAnimation) {
      continentalSignalAnimation.cancel();
      continentalSignalAnimation = null;
    }

    scene.classList.remove(
      "is-continental-opening",
      "is-continental-open",
    );
    continentalTrigger.setAttribute("aria-expanded", "false");
    continentalPanel.setAttribute("aria-hidden", "true");
    continentalSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      continentalTrigger.focus({ preventScroll: true });
    }
  };

  const closeDncaPanel = ({ restoreFocus = true } = {}) => {
    window.clearTimeout(dncaLaunchTimer);
    dncaLaunchTimer = 0;
    isDncaPanelOpen = false;

    if (dncaSignalAnimation) {
      dncaSignalAnimation.cancel();
      dncaSignalAnimation = null;
    }

    scene.classList.remove("is-dnca-opening", "is-dnca-open");
    dncaTrigger.setAttribute("aria-expanded", "false");
    dncaPanel.setAttribute("aria-hidden", "true");
    dncaSignal.classList.remove("is-travelling");

    if (restoreFocus && isDetailOpen) {
      dncaTrigger.focus({ preventScroll: true });
    }
  };

  const openLocationPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isLocationPanelOpen) {
      return;
    }

    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isLocationPanelOpen = true;
    locationTrigger.setAttribute("aria-expanded", "true");
    locationPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-location-opening");

    const revealPanel = () => {
      locationFlightAnimation = null;
      travelPlane.classList.remove("is-flying");

      if (!isLocationPanelOpen) {
        return;
      }

      scene.classList.remove("is-location-opening");
      scene.classList.add("is-location-open");

      if (focusPanel) {
        locationPanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof travelPlane.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = locationTrigger.getBoundingClientRect();
    const panelBounds = locationPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const endX = panelBounds.right - 34;
    const endY = panelBounds.top + 76;
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const heading = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

    travelPlane.style.left = `${startX}px`;
    travelPlane.style.top = `${startY}px`;
    travelPlane.classList.add("is-flying");

    locationFlightAnimation = travelPlane.animate(
      [
        {
          opacity: 0,
          transform: `translate3d(-50%, -50%, 0) scale(0.55) rotate(${heading}deg)`,
        },
        {
          offset: 0.16,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.15}px), calc(-50% + ${deltaY * 0.12 - 18}px), 0) scale(1) rotate(${heading - 8}deg)`,
        },
        {
          offset: 0.62,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.62}px), calc(-50% + ${deltaY * 0.58 - 48}px), 0) scale(1.08) rotate(${heading - 3}deg)`,
        },
        {
          offset: 0.88,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.9}px), calc(-50% + ${deltaY * 0.88 - 14}px), 0) scale(0.96) rotate(${heading}deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.72) rotate(${heading}deg)`,
        },
      ],
      {
        duration: 860,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    locationFlightAnimation.addEventListener("finish", revealPanel, {
      once: true,
    });
    locationFlightAnimation.addEventListener("cancel", revealPanel, {
      once: true,
    });
  };

  const openContactPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isContactPanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isContactPanelOpen = true;
    phoneTrigger.setAttribute("aria-expanded", "true");
    contactPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-contact-opening");

    const revealPanel = () => {
      contactSignalAnimation = null;
      contactSignal.classList.remove("is-travelling");

      if (!isContactPanelOpen) {
        return;
      }

      scene.classList.remove("is-contact-opening");
      scene.classList.add("is-contact-open");

      if (focusPanel) {
        contactPanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof contactSignal.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = phoneTrigger.getBoundingClientRect();
    const panelBounds = contactPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const endX = panelBounds.left + 34;
    const endY = panelBounds.top + 74;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    contactSignal.style.left = `${startX}px`;
    contactSignal.style.top = `${startY}px`;
    contactSignal.classList.add("is-travelling");

    contactSignalAnimation = contactSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.45)",
        },
        {
          offset: 0.2,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.14}px), calc(-50% + ${deltaY * 0.12 + 12}px), 0) scale(1)`,
        },
        {
          offset: 0.78,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.82}px), calc(-50% + ${deltaY * 0.78 - 24}px), 0) scale(1.06)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.7)`,
        },
      ],
      {
        duration: 760,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    contactSignalAnimation.addEventListener("finish", revealPanel, {
      once: true,
    });
    contactSignalAnimation.addEventListener("cancel", revealPanel, {
      once: true,
    });
  };

  const openPolytechniquePanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isPolytechniquePanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isPolytechniquePanelOpen = true;
    polytechniqueTrigger.setAttribute("aria-expanded", "true");
    polytechniquePanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-polytechnique-opening");

    const revealPanel = () => {
      academicSignalAnimation = null;
      academicSignal.classList.remove("is-travelling");

      if (!isPolytechniquePanelOpen) {
        return;
      }

      scene.classList.remove("is-polytechnique-opening");
      scene.classList.add("is-polytechnique-open");

      if (focusPanel) {
        polytechniquePanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof academicSignal.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = polytechniqueTrigger.getBoundingClientRect();
    const panelBounds = polytechniquePanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.right - 38;
    const endY = panelIsBelow ? panelBounds.top + 34 : panelBounds.top + 66;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    academicSignal.style.left = `${startX}px`;
    academicSignal.style.top = `${startY}px`;
    academicSignal.classList.add("is-travelling");

    academicSignalAnimation = academicSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.38) rotate(-18deg)",
        },
        {
          offset: 0.18,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.14}px), calc(-50% + ${deltaY * 0.12 - 10}px), 0) scale(0.82) rotate(8deg)`,
        },
        {
          offset: 0.7,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.72}px), calc(-50% + ${deltaY * 0.66 - 22}px), 0) scale(1.08) rotate(-4deg)`,
        },
        {
          offset: 0.9,
          opacity: 0.92,
          transform: `translate3d(calc(-50% + ${deltaX * 0.92}px), calc(-50% + ${deltaY * 0.9 - 6}px), 0) scale(0.92) rotate(2deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.68) rotate(0deg)`,
        },
      ],
      {
        duration: 820,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    academicSignalAnimation.addEventListener("finish", revealPanel, {
      once: true,
    });
    academicSignalAnimation.addEventListener("cancel", revealPanel, {
      once: true,
    });
  };

  const openEcePanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isEcePanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isEcePanelOpen = true;
    eceTrigger.setAttribute("aria-expanded", "true");
    ecePanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-ece-opening");

    const revealPanel = () => {
      eceSignalAnimation = null;
      eceSignal.classList.remove("is-travelling");

      if (!isEcePanelOpen) {
        return;
      }

      scene.classList.remove("is-ece-opening");
      scene.classList.add("is-ece-open");

      if (focusPanel) {
        ecePanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof eceSignal.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = eceTrigger.getBoundingClientRect();
    const panelBounds = ecePanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.left + 38;
    const endY = panelIsBelow ? panelBounds.top + 34 : panelBounds.top + 66;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    eceSignal.style.left = `${startX}px`;
    eceSignal.style.top = `${startY}px`;
    eceSignal.classList.add("is-travelling");

    eceSignalAnimation = eceSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.4) rotate(-12deg)",
        },
        {
          offset: 0.16,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.12}px), calc(-50% + ${deltaY * 0.1 - 8}px), 0) scale(0.86) rotate(3deg)`,
        },
        {
          offset: 0.66,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.68}px), calc(-50% + ${deltaY * 0.62 - 20}px), 0) scale(1.07) rotate(-3deg)`,
        },
        {
          offset: 0.9,
          opacity: 0.94,
          transform: `translate3d(calc(-50% + ${deltaX * 0.92}px), calc(-50% + ${deltaY * 0.9 - 5}px), 0) scale(0.92) rotate(1deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.68) rotate(0deg)`,
        },
      ],
      {
        duration: 800,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    eceSignalAnimation.addEventListener("finish", revealPanel, { once: true });
    eceSignalAnimation.addEventListener("cancel", revealPanel, { once: true });
  };

  const openLyceePanel = ({ focusPanel = false } = {}) => {
    if (!lyceeTrigger || !isDetailOpen || isLyceePanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isLyceePanelOpen = true;
    lyceeTrigger.setAttribute("aria-expanded", "true");
    lyceePanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-lycee-opening");

    const revealPanel = () => {
      lyceeSignalAnimation = null;
      lyceeSignal.classList.remove("is-travelling");

      if (!isLyceePanelOpen) {
        return;
      }

      scene.classList.remove("is-lycee-opening");
      scene.classList.add("is-lycee-open");

      if (focusPanel) {
        lyceePanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof lyceeSignal.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = lyceeTrigger.getBoundingClientRect();
    const panelBounds = lyceePanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.left + 42;
    const endY = panelIsBelow ? panelBounds.top + 36 : panelBounds.top + 70;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    lyceeSignal.style.left = `${startX}px`;
    lyceeSignal.style.top = `${startY}px`;
    lyceeSignal.classList.add("is-travelling");

    lyceeSignalAnimation = lyceeSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.35) rotate(-18deg)",
        },
        {
          offset: 0.15,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.1}px), calc(-50% + ${deltaY * 0.08 - 14}px), 0) scale(0.82) rotate(-7deg)`,
        },
        {
          offset: 0.58,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.58}px), calc(-50% + ${deltaY * 0.5 - 38}px), 0) scale(1.08) rotate(8deg)`,
        },
        {
          offset: 0.88,
          opacity: 0.96,
          transform: `translate3d(calc(-50% + ${deltaX * 0.9}px), calc(-50% + ${deltaY * 0.86 - 12}px), 0) scale(0.94) rotate(2deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.65) rotate(0deg)`,
        },
      ],
      {
        duration: 920,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    lyceeSignalAnimation.addEventListener("finish", revealPanel, { once: true });
    lyceeSignalAnimation.addEventListener("cancel", revealPanel, { once: true });
  };

  const openAfevPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isAfevPanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isAfevPanelOpen = true;
    afevTrigger.setAttribute("aria-expanded", "true");
    afevPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-afev-opening");

    const revealPanel = () => {
      mentorshipSignalAnimation = null;
      mentorshipSignal.classList.remove("is-travelling");

      if (!isAfevPanelOpen) {
        return;
      }

      scene.classList.remove("is-afev-opening");
      scene.classList.add("is-afev-open");

      if (focusPanel) {
        afevPanelClose.focus({ preventScroll: true });
      }
    };

    if (
      reducedMotion.matches ||
      typeof mentorshipSignal.animate !== "function"
    ) {
      revealPanel();
      return;
    }

    const triggerBounds = afevTrigger.getBoundingClientRect();
    const panelBounds = afevPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.left + 44;
    const endY = panelIsBelow ? panelBounds.top + 36 : panelBounds.top + 72;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    mentorshipSignal.style.left = `${startX}px`;
    mentorshipSignal.style.top = `${startY}px`;
    mentorshipSignal.classList.add("is-travelling");

    mentorshipSignalAnimation = mentorshipSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.42)",
        },
        {
          offset: 0.18,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.14}px), calc(-50% + ${deltaY * 0.12 - 12}px), 0) scale(0.88)`,
        },
        {
          offset: 0.66,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.7}px), calc(-50% + ${deltaY * 0.64 - 24}px), 0) scale(1.06)`,
        },
        {
          offset: 0.9,
          opacity: 0.94,
          transform: `translate3d(calc(-50% + ${deltaX * 0.92}px), calc(-50% + ${deltaY * 0.9 - 6}px), 0) scale(0.94)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.7)`,
        },
      ],
      {
        duration: 840,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    mentorshipSignalAnimation.addEventListener("finish", revealPanel, {
      once: true,
    });
    mentorshipSignalAnimation.addEventListener("cancel", revealPanel, {
      once: true,
    });
  };

  const openGqeberhaPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isGqeberhaPanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isGqeberhaPanelOpen = true;
    gqeberhaTrigger.setAttribute("aria-expanded", "true");
    gqeberhaPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-gqeberha-opening");

    const revealPanel = () => {
      gqeberhaSignalAnimation = null;
      gqeberhaSignal.classList.remove("is-travelling");

      if (!isGqeberhaPanelOpen) {
        return;
      }

      scene.classList.remove("is-gqeberha-opening");
      scene.classList.add("is-gqeberha-open");

      if (focusPanel) {
        gqeberhaPanelClose.focus({ preventScroll: true });
      }
    };

    if (
      reducedMotion.matches ||
      typeof gqeberhaSignal.animate !== "function"
    ) {
      revealPanel();
      return;
    }

    const triggerBounds = gqeberhaTrigger.getBoundingClientRect();
    const panelBounds = gqeberhaPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.right - 44;
    const endY = panelIsBelow ? panelBounds.top + 38 : panelBounds.top + 74;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    gqeberhaSignal.style.left = `${startX}px`;
    gqeberhaSignal.style.top = `${startY}px`;
    gqeberhaSignal.classList.add("is-travelling");

    gqeberhaSignalAnimation = gqeberhaSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.25) rotate(7deg)",
        },
        {
          offset: 0.2,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.14}px), calc(-50% + ${deltaY * 0.12 - 12}px), 0) scale(0.72) rotate(-4deg)`,
        },
        {
          offset: 0.58,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.6}px), calc(-50% + ${deltaY * 0.54 - 25}px), 0) scale(1.08) rotate(2deg)`,
        },
        {
          offset: 0.87,
          opacity: 0.97,
          transform: `translate3d(calc(-50% + ${deltaX * 0.9}px), calc(-50% + ${deltaY * 0.87 - 7}px), 0) scale(0.96) rotate(-1deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.7) rotate(0deg)`,
        },
      ],
      {
        duration: 900,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    gqeberhaSignalAnimation.addEventListener("finish", revealPanel, {
      once: true,
    });
    gqeberhaSignalAnimation.addEventListener("cancel", revealPanel, {
      once: true,
    });
  };

  const openIkeaPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isIkeaPanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isIkeaPanelOpen = true;
    ikeaTrigger.setAttribute("aria-expanded", "true");
    ikeaPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-ikea-opening");

    const revealPanel = () => {
      ikeaSignalAnimation = null;
      ikeaSignal.classList.remove("is-travelling");

      if (!isIkeaPanelOpen) {
        return;
      }

      scene.classList.remove("is-ikea-opening");
      scene.classList.add("is-ikea-open");

      if (focusPanel) {
        ikeaPanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof ikeaSignal.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = ikeaTrigger.getBoundingClientRect();
    const panelBounds = ikeaPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.right - 44;
    const endY = panelIsBelow ? panelBounds.top + 38 : panelBounds.top + 74;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    ikeaSignal.style.left = `${startX}px`;
    ikeaSignal.style.top = `${startY}px`;
    ikeaSignal.classList.add("is-travelling");

    ikeaSignalAnimation = ikeaSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.38) rotate(-16deg)",
        },
        {
          offset: 0.17,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.13}px), calc(-50% + ${deltaY * 0.1 - 12}px), 0) scale(0.86) rotate(5deg)`,
        },
        {
          offset: 0.67,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.7}px), calc(-50% + ${deltaY * 0.64 - 28}px), 0) scale(1.08) rotate(-4deg)`,
        },
        {
          offset: 0.9,
          opacity: 0.95,
          transform: `translate3d(calc(-50% + ${deltaX * 0.92}px), calc(-50% + ${deltaY * 0.9 - 7}px), 0) scale(0.94) rotate(2deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.68) rotate(0deg)`,
        },
      ],
      {
        duration: 860,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    ikeaSignalAnimation.addEventListener("finish", revealPanel, { once: true });
    ikeaSignalAnimation.addEventListener("cancel", revealPanel, { once: true });
  };

  const openContinentalPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isContinentalPanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeDncaPanel({ restoreFocus: false });
    hideInteractionHint();
    isContinentalPanelOpen = true;
    continentalTrigger.setAttribute("aria-expanded", "true");
    continentalPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-continental-opening");

    const revealPanel = () => {
      continentalSignalAnimation = null;
      continentalSignal.classList.remove("is-travelling");

      if (!isContinentalPanelOpen) {
        return;
      }

      scene.classList.remove("is-continental-opening");
      scene.classList.add("is-continental-open");

      if (focusPanel) {
        continentalPanelClose.focus({ preventScroll: true });
      }
    };

    if (
      reducedMotion.matches ||
      typeof continentalSignal.animate !== "function"
    ) {
      revealPanel();
      return;
    }

    const triggerBounds = continentalTrigger.getBoundingClientRect();
    const panelBounds = continentalPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.left + 44;
    const endY = panelIsBelow ? panelBounds.top + 38 : panelBounds.top + 72;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    continentalSignal.style.left = `${startX}px`;
    continentalSignal.style.top = `${startY}px`;
    continentalSignal.classList.add("is-travelling");

    continentalSignalAnimation = continentalSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.38) rotate(-20deg)",
        },
        {
          offset: 0.16,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.12}px), calc(-50% + ${deltaY * 0.1 - 10}px), 0) scale(0.84) rotate(8deg)`,
        },
        {
          offset: 0.65,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.68}px), calc(-50% + ${deltaY * 0.62 - 25}px), 0) scale(1.08) rotate(-7deg)`,
        },
        {
          offset: 0.9,
          opacity: 0.94,
          transform: `translate3d(calc(-50% + ${deltaX * 0.92}px), calc(-50% + ${deltaY * 0.9 - 6}px), 0) scale(0.94) rotate(3deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.68) rotate(0deg)`,
        },
      ],
      {
        duration: 840,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    continentalSignalAnimation.addEventListener("finish", revealPanel, {
      once: true,
    });
    continentalSignalAnimation.addEventListener("cancel", revealPanel, {
      once: true,
    });
  };

  const openDncaPanel = ({ focusPanel = false } = {}) => {
    if (!isDetailOpen || isDncaPanelOpen) {
      return;
    }

    closeLocationPanel({ restoreFocus: false });
    closeContactPanel({ restoreFocus: false });
    closePolytechniquePanel({ restoreFocus: false });
    closeEcePanel({ restoreFocus: false });
    closeLyceePanel({ restoreFocus: false });
    closeAfevPanel({ restoreFocus: false });
    closeGqeberhaPanel({ restoreFocus: false });
    closeIkeaPanel({ restoreFocus: false });
    closeContinentalPanel({ restoreFocus: false });
    hideInteractionHint();
    isDncaPanelOpen = true;
    dncaTrigger.setAttribute("aria-expanded", "true");
    dncaPanel.setAttribute("aria-hidden", "false");
    scene.classList.add("is-dnca-opening");

    const revealPanel = () => {
      dncaSignalAnimation = null;
      dncaSignal.classList.remove("is-travelling");

      if (!isDncaPanelOpen) {
        return;
      }

      scene.classList.remove("is-dnca-opening");
      scene.classList.add("is-dnca-open");

      if (focusPanel) {
        dncaPanelClose.focus({ preventScroll: true });
      }
    };

    if (reducedMotion.matches || typeof dncaSignal.animate !== "function") {
      revealPanel();
      return;
    }

    const triggerBounds = dncaTrigger.getBoundingClientRect();
    const panelBounds = dncaPanel.getBoundingClientRect();
    const startX = triggerBounds.left + triggerBounds.width / 2;
    const startY = triggerBounds.top + triggerBounds.height / 2;
    const panelIsBelow = window.innerWidth <= 1180;
    const endX = panelIsBelow
      ? panelBounds.left + panelBounds.width / 2
      : panelBounds.left + 46;
    const endY = panelIsBelow ? panelBounds.top + 38 : panelBounds.top + 76;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    dncaSignal.style.left = `${startX}px`;
    dncaSignal.style.top = `${startY}px`;
    dncaSignal.classList.add("is-travelling");

    dncaSignalAnimation = dncaSignal.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(-50%, -50%, 0) scale(0.38) rotate(-10deg)",
        },
        {
          offset: 0.16,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.12}px), calc(-50% + ${deltaY * 0.1 - 12}px), 0) scale(0.86) rotate(4deg)`,
        },
        {
          offset: 0.64,
          opacity: 1,
          transform: `translate3d(calc(-50% + ${deltaX * 0.68}px), calc(-50% + ${deltaY * 0.6 - 26}px), 0) scale(1.08) rotate(-3deg)`,
        },
        {
          offset: 0.9,
          opacity: 0.95,
          transform: `translate3d(calc(-50% + ${deltaX * 0.92}px), calc(-50% + ${deltaY * 0.9 - 7}px), 0) scale(0.95) rotate(1deg)`,
        },
        {
          opacity: 0,
          transform: `translate3d(calc(-50% + ${deltaX}px), calc(-50% + ${deltaY}px), 0) scale(0.68) rotate(0deg)`,
        },
      ],
      {
        duration: 860,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    dncaSignalAnimation.addEventListener("finish", revealPanel, { once: true });
    dncaSignalAnimation.addEventListener("cancel", revealPanel, { once: true });
  };

  const render = () => {
    const easing = 0.075;
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;

    document.documentElement.style.setProperty("--motion-x", currentX.toFixed(4));
    document.documentElement.style.setProperty("--motion-y", currentY.toFixed(4));

    const isMoving =
      Math.abs(targetX - currentX) > 0.0005 ||
      Math.abs(targetY - currentY) > 0.0005;

    if (isMoving) {
      animationFrame = window.requestAnimationFrame(render);
      return;
    }

    animationFrame = 0;
  };

  const requestRender = () => {
    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(render);
    }
  };

  const resetMotion = () => {
    targetX = 0;
    targetY = 0;
    requestRender();
  };

  const applyDetailState = (open) => {
    isDetailOpen = open;
    scene.classList.toggle("is-detail-open", open);
    document.body.classList.toggle("detail-open", open);
    introduction.setAttribute("aria-hidden", String(open));
    closeButton.tabIndex = open ? 0 : -1;

    if (open) {
      card.setAttribute("role", "document");
      card.removeAttribute("aria-expanded");
      card.setAttribute("aria-label", "CV interactif agrandi");
      stage.setAttribute("role", "dialog");
      stage.setAttribute("aria-modal", "true");
      stage.setAttribute("aria-label", "Aperçu agrandi du CV");
    } else {
      card.setAttribute("role", "button");
      card.setAttribute("aria-expanded", "false");
      card.setAttribute(
        "aria-label",
        "Agrandir le CV interactif d’Antoine Goudedranche",
      );
      stage.removeAttribute("role");
      stage.removeAttribute("aria-modal");
      stage.setAttribute("aria-label", "CV interactif d’Antoine Goudedranche");
    }

    resetMotion();
  };

  const setDetailState = (open) => {
    if (open === isDetailOpen || detailAnimation) {
      return;
    }

    const startBounds = floatingCard.getBoundingClientRect();
    scene.classList.add("is-detail-preparing");

    if (!open) {
      closeLocationPanel({ restoreFocus: false });
      closeContactPanel({ restoreFocus: false });
      closePolytechniquePanel({ restoreFocus: false });
      closeEcePanel({ restoreFocus: false });
      closeLyceePanel({ restoreFocus: false });
      closeAfevPanel({ restoreFocus: false });
      closeGqeberhaPanel({ restoreFocus: false });
      closeIkeaPanel({ restoreFocus: false });
      closeContinentalPanel({ restoreFocus: false });
      closeDncaPanel({ restoreFocus: false });
    }

    applyDetailState(open);

    if (open) {
      stage.scrollTop = 0;
      scheduleInteractionHint();
    } else {
      hideInteractionHint();
    }

    if (reducedMotion.matches || typeof floatingCard.animate !== "function") {
      scene.classList.remove("is-detail-preparing");
      return;
    }

    const endBounds = floatingCard.getBoundingClientRect();
    scene.classList.remove("is-detail-preparing");
    const startCenterX = startBounds.left + startBounds.width / 2;
    const startCenterY = startBounds.top + startBounds.height / 2;
    const endCenterX = endBounds.left + endBounds.width / 2;
    const endCenterY = endBounds.top + endBounds.height / 2;
    const offsetX = startCenterX - endCenterX;
    const offsetY = startCenterY - endCenterY;
    const startScale = startBounds.width / endBounds.width;

    scene.classList.add("is-detail-animating");
    detailAnimation = floatingCard.animate(
      [
        {
          transform: `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${startScale})`,
        },
        {
          transform: "translate3d(0, 0, 0) scale(1)",
        },
      ],
      {
        duration: 720,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );

    const finishAnimation = () => {
      scene.classList.remove("is-detail-animating");
      detailAnimation = null;
    };

    detailAnimation.addEventListener("finish", finishAnimation, { once: true });
    detailAnimation.addEventListener("cancel", finishAnimation, { once: true });
  };

  scene.addEventListener("pointermove", (event) => {
    if (reducedMotion.matches || event.pointerType === "touch") {
      return;
    }

    const bounds = scene.getBoundingClientRect();
    targetX = clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 2, -1, 1);
    targetY = clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 2, -1, 1);
    requestRender();
  });

  scene.addEventListener("pointerleave", resetMotion);
  window.addEventListener("blur", resetMotion);

  card.addEventListener("click", () => {
    if (!isDetailOpen) {
      setDetailState(true);
    }
  });
  card.addEventListener("keydown", (event) => {
    if (
      event.target !== card ||
      isDetailOpen ||
      (event.key !== "Enter" && event.key !== " ")
    ) {
      return;
    }

    event.preventDefault();
    setDetailState(true);
  });

  stage.addEventListener("click", (event) => {
    const clickedOutsideCard =
      !card.contains(event.target) && !closeButton.contains(event.target);

    if (isDetailOpen && clickedOutsideCard) {
      setDetailState(false);
      card.focus({ preventScroll: true });
    }
  });

  closeButton.addEventListener("click", () => {
    setDetailState(false);
    card.focus({ preventScroll: true });
  });

  interactionHint.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  interactionHintClose.addEventListener("click", () => {
    hideInteractionHint();
    card.focus({ preventScroll: true });
  });

  locationTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openLocationPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(locationLaunchTimer);
    locationLaunchTimer = window.setTimeout(
      () => openLocationPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  locationPanelClose.addEventListener("click", () => {
    closeLocationPanel();
  });

  phoneTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openContactPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(contactLaunchTimer);
    contactLaunchTimer = window.setTimeout(
      () => openContactPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  contactPanelClose.addEventListener("click", () => {
    closeContactPanel();
  });

  polytechniqueTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openPolytechniquePanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(polytechniqueLaunchTimer);
    polytechniqueLaunchTimer = window.setTimeout(
      () => openPolytechniquePanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  polytechniquePanelClose.addEventListener("click", () => {
    closePolytechniquePanel();
  });

  eceTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openEcePanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(eceLaunchTimer);
    eceLaunchTimer = window.setTimeout(
      () => openEcePanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  ecePanelClose.addEventListener("click", () => {
    closeEcePanel();
  });

  lyceeTrigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openLyceePanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(lyceeLaunchTimer);
    lyceeLaunchTimer = window.setTimeout(
      () => openLyceePanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  lyceePanelClose.addEventListener("click", () => {
    closeLyceePanel();
  });

  afevTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openAfevPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(afevLaunchTimer);
    afevLaunchTimer = window.setTimeout(
      () => openAfevPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  afevPanelClose.addEventListener("click", () => {
    closeAfevPanel();
  });

  gqeberhaHitArea.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openGqeberhaPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(gqeberhaLaunchTimer);
    gqeberhaLaunchTimer = window.setTimeout(
      () => openGqeberhaPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  gqeberhaPanelClose.addEventListener("click", () => {
    closeGqeberhaPanel();
  });

  ikeaTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openIkeaPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(ikeaLaunchTimer);
    ikeaLaunchTimer = window.setTimeout(
      () => openIkeaPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  ikeaPanelClose.addEventListener("click", () => {
    closeIkeaPanel();
  });

  continentalTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openContinentalPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(continentalLaunchTimer);
    continentalLaunchTimer = window.setTimeout(
      () => openContinentalPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  continentalPanelClose.addEventListener("click", () => {
    closeContinentalPanel();
  });

  dncaTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const focusPanel = event.detail === 0;

    if (isDetailOpen) {
      openDncaPanel({ focusPanel });
      return;
    }

    setDetailState(true);
    window.clearTimeout(dncaLaunchTimer);
    dncaLaunchTimer = window.setTimeout(
      () => openDncaPanel({ focusPanel }),
      reducedMotion.matches ? 90 : 760,
    );
  });

  dncaPanelClose.addEventListener("click", () => {
    closeDncaPanel();
  });

  emailTrigger.addEventListener("click", (event) => {
    event.stopPropagation();
    copyEmailAddress();
  });

  linkedinLink.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  beyondCards.forEach((beyondCard) => {
    const { trigger, modal } = getBeyondModal(beyondCard);
    const modalClose = modal?.querySelector(".beyond-modal__close");

    if (!trigger || !(modal instanceof HTMLDialogElement) || !modalClose) {
      return;
    }

    trigger.addEventListener("click", () => {
      const shouldExpand = trigger.getAttribute("aria-expanded") !== "true";

      beyondCards.forEach((otherCard) => {
        setBeyondCardState(
          otherCard,
          shouldExpand && otherCard === beyondCard,
        );
      });
    });

    modalClose.addEventListener("click", () => {
      setBeyondCardState(beyondCard, false);
      trigger.focus({ preventScroll: true });
    });

    modal.addEventListener("click", (event) => {
      if (event.target !== modal) {
        return;
      }

      setBeyondCardState(beyondCard, false);
      trigger.focus({ preventScroll: true });
    });

    modal.addEventListener("close", () => {
      beyondCard.classList.remove("is-expanded");
      trigger.setAttribute("aria-expanded", "false");
      syncBeyondModalLock();
    });
  });

  syncNeuralAnimation();

  if (neuralCanvas && "ResizeObserver" in window) {
    const neuralResizeObserver = new ResizeObserver(() => {
      if (reducedMotion.matches) {
        drawNeuralNetwork(0);
      }
    });
    neuralResizeObserver.observe(neuralCanvas);
  }

  if (beyondSection) {
    if (!reducedMotion.matches && "IntersectionObserver" in window) {
      beyondSection.classList.add("is-reveal-ready");

      const beyondObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          beyondSection.classList.add("is-visible");
          beyondObserver.disconnect();

          window.setTimeout(() => {
            beyondSection.classList.remove("is-reveal-ready");
          }, 1200);
        },
        { threshold: 0.12 },
      );

      beyondObserver.observe(beyondSection);
    } else {
      beyondSection.classList.add("is-visible");
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (!isDetailOpen) {
      const expandedBeyondCard = beyondCards.find((beyondCard) =>
        beyondCard.classList.contains("is-expanded"),
      );

      if (expandedBeyondCard) {
        setBeyondCardState(expandedBeyondCard, false);
        expandedBeyondCard
          .querySelector(".beyond-card__trigger")
          ?.focus({ preventScroll: true });
      }

      return;
    }

    if (isGqeberhaPanelOpen) {
      closeGqeberhaPanel();
    } else if (isLyceePanelOpen) {
      closeLyceePanel();
    } else if (isDncaPanelOpen) {
      closeDncaPanel();
    } else if (isContinentalPanelOpen) {
      closeContinentalPanel();
    } else if (isIkeaPanelOpen) {
      closeIkeaPanel();
    } else if (isAfevPanelOpen) {
      closeAfevPanel();
    } else if (isEcePanelOpen) {
      closeEcePanel();
    } else if (isPolytechniquePanelOpen) {
      closePolytechniquePanel();
    } else if (isContactPanelOpen) {
      closeContactPanel();
    } else if (isLocationPanelOpen) {
      closeLocationPanel();
    } else {
      setDetailState(false);
      card.focus({ preventScroll: true });
    }
  });

  reducedMotion.addEventListener("change", () => {
    resetMotion();
    syncNeuralAnimation();
  });
})();
