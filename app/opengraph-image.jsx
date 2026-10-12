import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'NativeCode — Desarrollo web, tiendas online y software de salud';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
    const logo = await readFile(join(process.cwd(), 'public/brand/nc-logo-white.png'));
    const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                        'radial-gradient(circle at 50% 120%, rgba(107,18,255,0.55) 0%, rgba(107,18,255,0.12) 40%, #000 70%)',
                    backgroundColor: '#000',
                }}
            >
                <img src={logoSrc} width={760} height={105} alt="" />
                <div
                    style={{
                        marginTop: 56,
                        fontSize: 34,
                        color: 'rgba(255,255,255,0.78)',
                        letterSpacing: -0.5,
                    }}
                >
                    Desarrollo web, tiendas online y software de salud
                </div>
            </div>
        ),
        size
    );
}
