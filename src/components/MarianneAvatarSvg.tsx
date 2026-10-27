import React from 'react';

interface MarianneAvatarSvgProps {
  isSpeaking?: boolean;
  className?: string;
  size?: number | string;
}

export const MarianneAvatarSvg: React.FC<MarianneAvatarSvgProps> = ({
  isSpeaking = false,
  className = '',
  size = 130,
}) => {
  return (
    <svg
      viewBox="0 0 240 250"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
      aria-label={isSpeaking ? 'Avatar de Marianne Tabarez sonriendo y hablando' : 'Avatar de Marianne Tabarez sonriendo'}
      role="img"
    >
      <defs>
        {/* Soft blush radial gradient */}
        <radialGradient id="blushGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59388" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#F59388" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ============================================================ */}
      {/* 1. BACK HAIR (Cascading behind shoulders and ears)           */}
      {/* ============================================================ */}
      <g id="back-hair">
        {/* Main back hair mass */}
        <path
          d="M 52 140 C 32 165, 30 205, 54 235 C 72 245, 168 245, 186 235 C 210 205, 208 165, 188 140 C 205 95, 180 30, 120 22 C 60 30, 35 95, 52 140 Z"
          fill="#241B20"
        />
        {/* Left shoulder wave curve */}
        <path
          d="M 44 148 C 26 172, 22 204, 38 230 C 50 238, 70 240, 80 238 C 50 216, 54 176, 58 152 Z"
          fill="#1C1519"
        />
        {/* Right shoulder wave curve */}
        <path
          d="M 196 148 C 214 172, 218 204, 202 230 C 190 238, 170 240, 160 238 C 190 216, 186 176, 182 152 Z"
          fill="#1C1519"
        />
      </g>

      {/* ============================================================ */}
      {/* 2. BODY & BLAZER (Professional dark chic styling)           */}
      {/* ============================================================ */}
      <g id="body-blazer">
        {/* Neck */}
        <path
          d="M 106 142 L 106 176 C 106 182, 134 182, 134 176 L 134 142 Z"
          fill="#F5BE9E"
        />
        {/* Neck shadow under chin */}
        <ellipse cx="120" cy="148" rx="14" ry="5" fill="#E8AA86" opacity="0.6" />

        {/* Inner black scoop top */}
        <path
          d="M 94 172 C 108 186, 132 186, 146 172 L 152 246 L 88 246 Z"
          fill="#161316"
        />

        {/* Blazer body */}
        <path
          d="M 58 246 C 60 212, 70 178, 92 164 L 110 204 L 106 246 Z"
          fill="#2C272B"
        />
        <path
          d="M 182 246 C 180 212, 170 178, 148 164 L 130 204 L 134 246 Z"
          fill="#2C272B"
        />

        {/* Blazer Lapels */}
        <path
          d="M 92 164 L 108 198 L 120 188 L 104 160 Z"
          fill="#3B343A"
        />
        <path
          d="M 148 164 L 132 198 L 120 188 L 136 160 Z"
          fill="#3B343A"
        />
      </g>

      {/* ============================================================ */}
      {/* 3. EARS & GOLD HOOP EARRINGS                                */}
      {/* ============================================================ */}
      <g id="ears-and-earrings">
        {/* Left Ear */}
        <ellipse cx="62" cy="120" rx="9" ry="12" fill="#FCD1B6" />
        <ellipse cx="63" cy="120" rx="5" ry="7" fill="#EFA98A" opacity="0.5" />

        {/* Left Gold Hoop Earring */}
        <path
          d="M 61 128 C 55 130, 52 142, 63 144 C 71 143, 71 134, 66 128"
          stroke="#E5B546"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 61 128 C 57 131, 55 140, 63 142"
          stroke="#FCE38A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Right Ear */}
        <ellipse cx="178" cy="120" rx="9" ry="12" fill="#FCD1B6" />
        <ellipse cx="177" cy="120" rx="5" ry="7" fill="#EFA98A" opacity="0.5" />

        {/* Right Gold Hoop Earring */}
        <path
          d="M 179 128 C 185 130, 188 142, 177 144 C 169 143, 169 134, 174 128"
          stroke="#E5B546"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 179 128 C 183 131, 185 140, 177 142"
          stroke="#FCE38A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* ============================================================ */}
      {/* 4. FACE SHAPE & ROSY BLUSH CHEEKS                           */}
      {/* ============================================================ */}
      <g id="face">
        {/* Soft rounded chibi face contour */}
        <path
          d="M 66 110 C 66 75, 84 56, 120 56 C 156 56, 174 75, 174 110 C 174 135, 158 152, 120 152 C 82 152, 66 135, 66 110 Z"
          fill="#FCD1B6"
        />

        {/* Rosy blush on cheeks */}
        <circle cx="82" cy="122" r="12" fill="url(#blushGradient)" />
        <circle cx="158" cy="122" r="12" fill="url(#blushGradient)" />
      </g>

      {/* ============================================================ */}
      {/* 5. FACIAL FEATURES (NORMAL vs SPEAKING STATE)                */}
      {/* ============================================================ */}
      <g id="features">
        {/* EYEBROWS */}
        <path
          d={
            isSpeaking
              ? 'M 72 90 Q 82 82 92 88' // Arched up in joy
              : 'M 72 92 Q 82 85 92 90'
          }
          stroke="#34272C"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d={
            isSpeaking
              ? 'M 148 88 Q 158 82 168 90' // Arched up in joy
              : 'M 148 90 Q 158 85 168 92'
          }
          stroke="#34272C"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* EYES */}
        {!isSpeaking ? (
          /* Normal State: Big open glossy anime/chibi eyes */
          <g id="eyes-normal">
            {/* Left Eye */}
            <ellipse cx="84" cy="106" rx="8.5" ry="10" fill="#1E171B" />
            {/* Eyelash wing flick */}
            <path
              d="M 74 103 Q 84 97 93 103 Q 97 101 98 99"
              stroke="#1E171B"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Glossy light catch spark dots */}
            <circle cx="87" cy="102" r="3.2" fill="#FFFFFF" />
            <circle cx="81" cy="110" r="1.4" fill="#FFFFFF" />

            {/* Right Eye */}
            <ellipse cx="156" cy="106" rx="8.5" ry="10" fill="#1E171B" />
            {/* Eyelash wing flick */}
            <path
              d="M 147 103 Q 156 97 166 103 Q 170 101 171 99"
              stroke="#1E171B"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Glossy light catch spark dots */}
            <circle cx="159" cy="102" r="3.2" fill="#FFFFFF" />
            <circle cx="153" cy="110" r="1.4" fill="#FFFFFF" />
          </g>
        ) : (
          /* Speaking State: Joyful laughing squinty eyes (^_^) */
          <g id="eyes-speaking">
            {/* Left curved eye arc */}
            <path
              d="M 74 107 Q 84 98 94 107"
              stroke="#1E171B"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Outer winged lash flick */}
            <path
              d="M 94 107 Q 99 105 101 102"
              stroke="#1E171B"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right curved eye arc */}
            <path
              d="M 146 107 Q 156 98 166 107"
              stroke="#1E171B"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Outer winged lash flick */}
            <path
              d="M 166 107 Q 171 105 173 102"
              stroke="#1E171B"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        )}

        {/* NOSE: delicate dot */}
        <circle cx="120" cy="116" r="1.5" fill="#E59F7C" />

        {/* MOUTH */}
        {!isSpeaking ? (
          /* Normal State: Sweet curved closed smile */
          <path
            d="M 112 125 Q 120 131 128 125"
            stroke="#653528"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          /* Speaking State: Open laughing mouth with teeth & pink tongue */
          <g id="mouth-open">
            <path
              d="M 110 123 C 110 123, 114 122, 120 122 C 126 122, 130 123, 130 123 C 130 123, 132 137, 120 137 C 108 137, 110 123, 110 123 Z"
              fill="#5A1F1F"
            />
            {/* Top Teeth */}
            <path
              d="M 112 123 L 128 123 C 127 126, 124 127, 120 127 C 116 127, 113 126, 112 123 Z"
              fill="#FFFFFF"
            />
            {/* Pink Tongue */}
            <path
              d="M 113 133 C 115 131, 117 129, 120 129 C 123 129, 125 131, 127 133 C 125 136, 122 137, 120 137 C 118 137, 115 136, 113 133 Z"
              fill="#E87A76"
            />
          </g>
        )}
      </g>

      {/* ============================================================ */}
      {/* 6. FRONT HAIR (Voluminous side-swept bangs & framing waves)  */}
      {/* ============================================================ */}
      <g id="front-hair">
        {/* Large sweeping bangs parting on the left, curving over forehead */}
        <path
          d="M 68 86 C 82 48, 124 38, 150 44 C 172 50, 182 68, 178 86 C 168 64, 142 56, 120 62 C 96 68, 76 86, 70 106 C 68 98, 68 90, 68 86 Z"
          fill="#34272C"
        />

        {/* Left front cascading wave */}
        <path
          d="M 68 86 C 58 108, 48 132, 54 162 C 58 184, 70 200, 74 216 C 60 196, 50 170, 48 140 C 46 112, 58 94, 68 86 Z"
          fill="#2A2025"
        />

        {/* Right front cascading wave framing cheek */}
        <path
          d="M 174 86 C 182 108, 192 132, 186 162 C 182 184, 170 200, 166 216 C 180 196, 190 170, 192 140 C 194 112, 184 94, 174 86 Z"
          fill="#2A2025"
        />

        {/* Soft hair highlight strand */}
        <path
          d="M 94 48 C 114 44, 136 46, 152 54"
          stroke="#48373E"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </g>
    </svg>
  );
};
